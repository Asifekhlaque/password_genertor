var password=document.getElementById("password");

function genPassword(){
    var chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    var passwordLength=8;
    var password="";
    for(var i=0;i<passwordLength;i++){
        var randomNumber=Math.floor(Math.random()*chars.length);
        password+=chars.substring(randomNumber,randomNumber+1);
    }
    document.getElementById("password").value=password;
}

function copyPassword() {
    var copyText = document.getElementById("password").value;
    
    var tempInput = document.createElement("input");
    tempInput.style = "position: absolute; left: -1000px; top: -1000px";
    tempInput.value = copyText;
    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    document.execCommand("copy");
    document.body.removeChild(tempInput);

    alert("Password copied to clipboard!");
}