var signup = document.getElementById('signup');
var signin= document.getElementById('signin');

signin.addEventListener('click', function(){
    signup.style.color ="grey";
    signin.style.color ="white";
    signup.style.borderBottomStyle="none";
    signin.style.borderBottomStyle="solid";
    signin.style.borderBottomWidth="1px";
    signin.style.borderBottomColor="rgba(200, 134, 156, 0.851)"
}, false
);

signup.addEventListener('click', function(){
    signin.style.color ="grey";
    signup.style.color ="white";
    signin.style.borderBottomStyle="none";
    signup.style.borderBottomStyle="solid";
    signup.style.borderBottomWidth="1px";
    signup.style.borderBottomColor="rgba(200, 134, 156, 0.851)"
})