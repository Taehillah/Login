var signup = document.getElementById('signup');
var signin= document.getElementById('signin');
var passwordInput = document.getElementById('passwords');
var passwordInput1 = document.getElementById('passwordInputss')
var submitButton= document.getElementById('buttons');
var toggle= document.getElementById("switches");



signin.addEventListener('click', function(){
    signup.style.color ="grey";
    signin.style.color ="white";
    signup.style.borderBottomStyle="none";
    signin.style.borderBottomStyle="solid";
    signin.style.borderBottomWidth="1px";
    signin.style.borderBottomColor="rgba(200, 134, 156, 0.851)"
    submitButton.value="SIGN IN";
    document.getElementById('passwordInputss').style.display="none";
    document.getElementById('passwordLabel').style.display="none";
}, false
);

signup.addEventListener('click', function(){
    signin.style.color ="grey";
    signup.style.color ="white";
    signin.style.borderBottomStyle="none";
    signup.style.borderBottomStyle="solid";
    signup.style.borderBottomWidth="1px";
    signup.style.borderBottomColor="rgba(200, 134, 156, 0.851)";
    submitButton.value="SIGN UP";
    document.getElementById('passwordInputss').style.display="block";
    document.getElementById('passwordLabel').style.display="block";
},false
);

function displayPassword(){  
    if (passwordInput.type==="password")
      {
       passwordInput.type="text";
      }
      else {
       passwordInput.type="password"; 
      }
};

function displayPassword(){  
    if (passwordInput1.type==="password")
      {
       passwordInput1.type="text";
      }
      else {
       passwordInput1.type="password"; 
      }
};