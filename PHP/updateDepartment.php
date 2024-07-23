<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-Type: application/json');
require 'config.php'; // Database connection

$input = json_decode(file_get_contents('php://input'), true);

if (isset($input['departmentID'], $input['departmentname'], $input['departmentacr'])) {
    $departmentID = $input['departmentID'];
    $departmentname = $input['departmentname'];
    $departmentacr = $input['departmentacr'];

    $sql = "UPDATE department SET departmentname = ?, departmentacr = ? WHERE departmentID = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssi", $departmentname, $departmentacr, $departmentID);

    $response = [];
    if ($stmt->execute()) {
        $response['success'] = true;
        $response['message'] = 'Department updated successfully';
    } else {
        $response['success'] = false;
        $response['message'] = 'Failed to update department';
    }

    $stmt->close();
} else {
    $response = [
        'success' => false,
        'message' => 'Invalid input'
    ];
}

echo json_encode($response);
$conn->close();
?>
