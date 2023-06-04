<?php
require once "db.php";
if (isset($_SESSION['uid'])!=""){
    header("Location:dashboard.php");
}
if  (!isset($_POST['signup'])){
    $name = mysqli_real_escape_string($conn, $_POST[$user_name]);
}

 ?>