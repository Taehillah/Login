<?php
$servername='localhost';
$username='root';
$password='';
$dbname='logindb';
$conn=mysqli_connect($servername,$username,$password,"$logindb");
if(!$conn){
    die('Couldnt Connect to the Sql Server' .mysql_error());
}