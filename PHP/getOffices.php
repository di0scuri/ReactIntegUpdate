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
include 'config.php';

$sql = "SELECT officeID, officename FROM office";
$result = $conn->query($sql);

$offices = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $offices[] = $row;
    }
} else {
    // Debugging: no rows found
    echo json_encode(['error' => 'No offices found']);
    exit();
}

echo json_encode($offices);
$conn->close();
?>
