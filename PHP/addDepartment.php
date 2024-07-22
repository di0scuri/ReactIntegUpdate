<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: http://localhost:5173");
// Allow the following methods
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");
// Allow the following headers
header("Access-Control-Allow-Headers: Content-Type, Authorization");


header('Content-Type: application/json');

// Database connection parameters
$servername = "localhost";
$username = "root"; // Change this to your database username
$password = ""; // Change this to your database password
$dbname = "integ"; // Change this to your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(['success' => false, 'message' => 'Database connection failed']));
}

// Get input data
$data = json_decode(file_get_contents('php://input'), true);
$departmentacr = $data['departmentacr'];
$departmentname = $data['departmentname'];
$password = $data['password'];

// Validate input data
if (empty($departmentacr) || empty($departmentname) || empty($password)) {
    echo json_encode(['success' => false, 'message' => 'All fields are required']);
    $conn->close();
    exit();
}

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO department (departmentacr, departmentname, password) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $departmentacr, $departmentname, $password);

// Execute the statement
if ($stmt->execute()) {
    echo json_encode(['success' => true, 'message' => 'Department added successfully']);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to add department']);
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>
