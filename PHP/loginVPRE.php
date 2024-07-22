<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: http://localhost:5173");
// Allow the following methods
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");
// Allow the following headers
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    // Return 200 OK if the request method is OPTIONS
    http_response_code(200);
    exit();
}

session_start();

// Database configuration
$servername = "localhost";
$username = "root"; // Replace with your MySQL username
$password = ""; // Replace with your MySQL password
$dbname = "integ"; // Replace with your MySQL database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error . " (" . $conn->connect_errno . ")");
}

function get_user_by_username($conn, $username) {
    $sql = "SELECT vpreID, username, password FROM vpre WHERE username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('s', $username);
    $stmt->execute();
    $result = $stmt->get_result();
    $stmt->close();
    return $result->fetch_assoc();
}

// Function to send a JSON response
function send_response($success, $message, $user = null, $debug = []) {
    header('Content-Type: application/json');
    echo json_encode([
        'success' => $success,
        'message' => $message,
        'user' => $user,
        'debug' => $debug
    ]);
    exit();
}

// Retrieve data from POST request
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $debug = [];
    $received_data = file_get_contents("php://input");
    $debug[] = "Received data: " . $received_data;

    $data = json_decode($received_data, true);

    $username = isset($data['username']) ? $data['username'] : null;
    $password = isset($data['password']) ? $data['password'] : null;

    $debug[] = "Decoded username: " . $username;
    $debug[] = "Decoded password: " . $password;

    if ($username && $password) {
        $username = mysqli_real_escape_string($conn, $username);
        $password = mysqli_real_escape_string($conn, $password);

        // Fetch user details
        $user = get_user_by_username($conn, $username);
        $debug[] = "User fetched: " . json_encode($user);

        if ($user) {
            if ($password === $user['password']) {
                $_SESSION['vpreID'] = $user['vpreID'];
                $_SESSION['username'] = $user['username'];
                $_SESSION['user_level'] = 'admin';

                send_response(true, 'Login successful', [
                    'vpreID' => $user['vpreID'],
                    'username' => $user['username'],
                    'user_level' => 'admin'
                ], $debug);
            } else {
                send_response(false, 'Incorrect password', null, $debug);
            }
        } else {
            send_response(false, 'User not found', null, $debug);
        }
    } else {
        send_response(false, 'Username or password is missing', null, $debug);
    }
}

// Close connection
$conn->close();
?>
