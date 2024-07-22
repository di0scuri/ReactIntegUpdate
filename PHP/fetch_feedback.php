<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "student_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "
    SELECT 
        SUM(rate1) AS rate1, SUM(rate2) AS rate2, SUM(rate3) AS rate3, SUM(rate4) AS rate4, SUM(rate5) AS rate5,
        COUNT(*) AS row_count
    FROM 
        feedback
    WHERE 
        office = 'Admission Office'
";

$result = $conn->query($sql);

$data = $result->fetch_assoc();

$conn->close();

echo json_encode($data);
?>
