 document.getElementById('btn').addEventListener('click', function(){
    const inputEmail = document.getElementById('email').value;
    const inputPassword = document.getElementById('password').value;

    if(inputEmail === 'aniksarkar0177@gmail.com' && inputPassword === '01779087'){
        window.location.href= "http://127.0.0.1:5500/js/bank.html";
    }
    else{
        alert("Please check your email & password");
    }
 })