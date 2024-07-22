<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
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

function get_department_by_acronym($conn, $departmentacr) {
    $sql = "SELECT departmentID, departmentacr, password FROM department WHERE departmentacr = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('s', $departmentacr);
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

    $departmentacr = isset($data['departmentacr']) ? $data['departmentacr'] : null;
    $password = isset($data['password']) ? $data['password'] : null;

    $debug[] = "Decoded departmentacr: " . $departmentacr;
    $debug[] = "Decoded password: " . $password;

    if ($departmentacr && $password) {
        $departmentacr = mysqli_real_escape_string($conn, $departmentacr);
        $password = mysqli_real_escape_string($conn, $password);

        // Fetch department details
        $department = get_department_by_acronym($conn, $departmentacr);
        $debug[] = "Department fetched: " . json_encode($department);

        if ($department) {
            if ($password === $department['password']) {
                $_SESSION['departmentID'] = $department['departmentID'];
                $_SESSION['departmentacr'] = $department['departmentacr'];
                $_SESSION['user_level'] = 'department';

                send_response(true, 'Login successful', [
                    'departmentID' => $department['departmentID'],
                    'departmentacr' => $department['departmentacr'],
                    'user_level' => 'department'
                ], $debug);
            } else {
                send_response(false, 'Incorrect password', null, $debug);
            }
        } else {
            send_response(false, 'Department not found', null, $debug);
        }
    } else {
        send_response(false, 'Department or password is missing', null, $debug);
    }
}

// Close connection
$conn->close();
?>
