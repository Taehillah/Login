<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign_Up | Login</title>
    <link rel="stylesheet" href="main.css">    
</head>
<body>
    <form id="forms" method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
    <?php //used to send sensitive information via http insted of url displays of the get method?>



<p class="legendary" id="signin">SIGN IN</p>
<p class="legendary" id="signup">SIGN UP</p>

<p class="labels">USERNAME: <?php echo $usernameError ?> </p>
<input class="inputs" type="text" name="fusername">

<p class="labels">PASSWORD:  <?php echo $passwordError ?> </p>
<input id="passwords" class="inputs" type="password" name="fpassword">

<p id="passwordLabel"class="labels">RE-TYPE PASSWORD: <?php echo $passwordError ?></p>
<input id="passwordInputss" class="inputs" type="password" name="frepeat_password">

<div>
<label class="switchs"> 
<input type="checkbox" value="hshdyd77" id="switches" onclick="displayPassword()"/>
</label>
<p id="labelsSwitch">SHOW PASSWORD</p>
</div>


<input class="inputs" type="submit" id="buttons" value="SIGN IN">

<p id="recoveries">RECOVER PASSWORD</p>

    </form>
    <script type="text/javascript" src="main.js"></script>
    
    <?php

$usernameInput = $_POST["fusername"];
$passwordInput = $_POST["fpassword"];
$password2Input = $_POST["frepeat_password"];
global $usernameError;
global $passwordError;
global $password2Error;

if($passwordError != $password2Error){
$passwordError = "passwords are not the same";
} 
if ($passwordError || $password2Error = ""){
    $password2Error = "fill this field" && $passwordError = "fill this field";
};

if ($usernameInput =""){
$usernameError = "fill this field";
};
?>

</body>
</html>