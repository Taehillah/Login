<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up | Login</title>
    <link rel="stylesheet" href="main.css">    
</head>
<body>
    <form id="forms" method="post">

<p class="legendary" id="signin">SIGN IN</p>
<p class="legendary" id="signup">SIGN UP</p>

<p class="labels">USERNAME</p>

<input class="inputs" type="text" <?php
$input2 = $_GET
?>>

<p class="labels">PASSWORD</p>
<input id="passwords" class="inputs" type="password">

<p id="passwordLabel"class="labels">RE-TYPE PASSWORD</p>
<input id="passwordInputss" class="inputs" type="password">

<div>
<label class="switchs"> 
<input type="checkbox" value="hshdyd77" id="switches" onclick="displayPassword()"/>
</label>
<p id="labelsSwitch">SHOW PASSWORD</p>
</div>


<input class="inputs" id="buttons" value="SIGN IN">

<p id="recoveries">RECOVER PASSWORD</p>

    </form>
    <script type="text/javascript" src="main.js"></script>
    
</body>
</html>