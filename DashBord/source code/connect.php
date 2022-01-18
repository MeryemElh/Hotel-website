<?php
/* Local Database*/

$servername = "localhost:3305";
$username = "root";
$password = "";
$dbname = "hotel";


// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}



?> 