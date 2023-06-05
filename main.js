const signup = document.getElementById('signup');
const signin= document.getElementById('signin');
const passwordInput = document.getElementById('passwords');
const passwordInput1 = document.getElementById('passwordInputss')
const submitButton= document.getElementById('buttons');
const toggle= document.getElementById('switches');
const recovery= document.getElementById('recoveries');
const former=document.getElementsByTagName('form');



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
    recovery.style.paddingTop="2px";
},false
);

function displayPassword(){  
    if (passwordInput.type==="password"&&passwordInput1.type==="password")
      {
       passwordInput.type="text";
       passwordInput1.type="text"; 
      }
      else {
       passwordInput.type="password"; 
       passwordInput1.type="password";  
      }
};

recovery.addEventListener('mouse-over',function(){
recovery.style.animation.color='hue';
},false
);
$(document.getElementById(discoveries)).on("click"){
    alert("hi");
} 