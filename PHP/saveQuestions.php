<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-Type: application/json');
include 'config.php';

$data = json_decode(file_get_contents('php://input'), true);
$officeID = $data['officeID'];
$questions = $data['questions'];

try {
    $conn->begin_transaction();

    // Ensure there are 5 entries for the office
    for ($i = 1; $i <= 5; $i++) {
        $stmt = $conn->prepare('SELECT COUNT(*) FROM questions WHERE number = ? AND officeID = ?');
        $stmt->bind_param('ii', $i, $officeID);
        $stmt->execute();
        $stmt->bind_result($count);
        $stmt->fetch();
        $stmt->close();

        if ($count == 0) {
            // Insert a new question if it doesn't exist
            $stmt = $conn->prepare('INSERT INTO questions (officeID, number, question) VALUES (?, ?, ?)');
            $defaultQuestion = 'Edit to set question';
            $stmt->bind_param('iis', $officeID, $i, $defaultQuestion);
            $stmt->execute();
            $stmt->close();
        }
    }

    // Update questions
    foreach ($questions as $question) {
        $stmt = $conn->prepare('UPDATE questions SET question = ? WHERE number = ? AND officeID = ?');
        $stmt->bind_param('sii', $question['question'], $question['number'], $officeID);
        $stmt->execute();
        $stmt->close();
    }

    $conn->commit();
    echo json_encode(['success' => true]);
} catch (Exception $e) {
    $conn->rollback();
    echo json_encode(['error' => $e->getMessage()]);
}

$conn->close();
