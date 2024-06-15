<?php
// php/config.php

$host = 'localhost'; // MySQL host (e.g., localhost)
$username = 'root'; // MySQL username
$password = ''; // MySQL password
$database = 'project_management'; // Database name

try {
    $conn = new PDO("mysql:host=$host;dbname=$database", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // Uncomment the line below if you want to see connection success message
    // echo "Connected successfully";
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>
