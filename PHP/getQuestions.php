<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-Type: application/json');
include 'config.php';

$officeID = isset($_GET['officeID']) ? intval($_GET['officeID']) : 0;

$questions = [];

if ($officeID > 0) {
    $sql = "SELECT * FROM questions WHERE officeID = $officeID";
    $result = $conn->query($sql);

    if ($result) {
        while ($row = $result->fetch_assoc()) {
            $questions[] = $row;
        }
    } else {
        echo json_encode(["error" => "Error executing query: " . $conn->error]);
        exit;
    }
} else {
    echo json_encode(["error" => "Invalid office ID"]);
    exit;
}

echo json_encode($questions);

$conn->close();
?>
