<?php
$username = "epiz_26648920";
$password = "RTR5piqZG0CKGM9";
$hostname = "sql300.epizy.com"; 


//connection to the database
$dbhandle = mysql_connect($hostname, $username, $password) 
 or die("Unable to connect to MySQL");

//select a database to work 
$db = "epiz_26648920_unleashe_hotel";
$selected = mysql_select_db($db,$dbhandle) 
  or die("Could not select database");


?>