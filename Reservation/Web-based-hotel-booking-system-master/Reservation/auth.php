<?php
$username = "root";
$password = "";
$hostname = "localhost:3305"; 

//connection to the database
$dbhandle = mysqli_connect($hostname, $username, $password);
// Check connection
if (!$dbhandle) {
    die("Connection failed: " . mysqli_connect_error());
}

//select a database to work 
$db = "unleashe_hotel";
$selected = mysqli_select_db($dbhandle,$db);
if (!$selected) {
    die("Database selection failed: " . mysqli_error($dbhandle));
}
?>