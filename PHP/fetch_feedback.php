<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "integ";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$acadyearID = isset($_GET['acadyearID']) ? $_GET['acadyearID'] : '';
$semesterID = isset($_GET['semesterID']) ? $_GET['semesterID'] : '';
$departmentID = isset($_GET['departmentID']) ? $_GET['departmentID'] : '';

$sql = "
    SELECT 
        r.q1, r.q2, r.q3, r.q4, r.q5
    FROM 
        result r
    JOIN 
        feedback f ON r.feedbackID = f.feedbackID
    WHERE 
        f.acadyearID = ? AND f.semesterID = ? AND f.clientID IN 
          (SELECT clientID FROM client WHERE departmentID = ?)
";

$stmt = $conn->prepare($sql);
$stmt->bind_param("iii", $acadyearID, $semesterID, $departmentID);
$stmt->execute();
$result = $stmt->get_result();

$data = [];
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

$stmt->close();
$conn->close();

echo json_encode($data);
