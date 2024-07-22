<?php
header('Content-Type: application/json');

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: http://localhost:5173");
// Allow the following methods
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");
// Allow the following headers
header("Access-Control-Allow-Headers: Content-Type, Authorization");
 include 'config.php';

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(['error' => 'Connection failed: ' . $conn->connect_error]));
}

// Function to get unique usernames from a table
function getUniqueUsernames($conn, $table) {
    $usernames = array();
    $sql = "SELECT DISTINCT username FROM $table";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $usernames[] = $row['username'];
        }
    }
    return $usernames;
}

// Get unique usernames from feedback and feedback_others tables
$feedbackUsernames = getUniqueUsernames($conn, 'feedback');
$feedbackOthersUsernames = getUniqueUsernames($conn, 'feedback_others');

// Get all student and employee usernames
$studentUsernames = getUniqueUsernames($conn, 'students');
$employeeUsernames = getUniqueUsernames($conn, 'employees');

// Function to categorize usernames
function categorizeUsernames($usernames, $studentUsernames, $employeeUsernames) {
    $categorized = [
        'students' => 0,
        'employees' => 0,
        'others' => 0
    ];

    foreach ($usernames as $username) {
        if (in_array($username, $studentUsernames)) {
            $categorized['students']++;
        } elseif (in_array($username, $employeeUsernames)) {
            $categorized['employees']++;
        } else {
            $categorized['others']++;
        }
    }

    return $categorized;
}

// Combine all unique usernames from both tables
$allUsernames = array_unique(array_merge($feedbackUsernames, $feedbackOthersUsernames));

// Categorize the combined usernames
$categorizedUsernames = categorizeUsernames($allUsernames, $studentUsernames, $employeeUsernames);

// Output the categorized usernames as JSON
echo json_encode([
    ['type' => 'student', 'count' => $categorizedUsernames['students']],
    ['type' => 'employee', 'count' => $categorizedUsernames['employees']],
    ['type' => 'others', 'count' => $categorizedUsernames['others']],
]);

// Close connection
$conn->close();
?>
