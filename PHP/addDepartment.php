<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-Type: application/json');

// Include database connection parameters
include 'config.php';

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(['success' => false, 'message' => 'Database connection failed: ' . $conn->connect_error]));
}

// Get input data
$data = json_decode(file_get_contents('php://input'), true);

// Validate input data
if (!isset($data['departmentacr']) || !isset($data['departmentname']) || !isset($data['password'])) {
    echo json_encode(['success' => false, 'message' => 'All fields are required']);
    $conn->close();
    exit();
}

$departmentacr = $data['departmentacr'];
$departmentname = $data['departmentname'];
$password = $data['password'];

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO department (departmentacr, departmentname, password) VALUES (?, ?, ?)");
if ($stmt === false) {
    echo json_encode(['success' => false, 'message' => 'Prepare failed: ' . $conn->error]);
    $conn->close();
    exit();
}

$stmt->bind_param("sss", $departmentacr, $departmentname, $password);

// Execute the statement
if ($stmt->execute()) {
    echo json_encode(['success' => true, 'message' => 'Department added successfully']);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to add department: ' . $stmt->error]);
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>
