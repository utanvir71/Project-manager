<?php
// php/index.php

session_start();
include 'php/config.php';

if (!isset($_SESSION['user_id'])) {
    header("Location: login.html");
    exit();
}

$userId = $_SESSION['user_id'];
$username = $_SESSION['username'];

// Additional logic for displaying user-specific data, projects, tasks, etc.
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project Management System</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <h1>Welcome to Project Management System</h1>
    </header>

    <main>
        <p>Welcome, <?php echo $username; ?>!</p>
        <!-- Display user-specific content here -->
        <p><a href="logout.php">Logout</a></p>
    </main>

    <script src="js/script.js"></script>
</body>
</html>
