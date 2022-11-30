console.log("hello word")
//const fs = require(FileSystem);

function login(){
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    let text = username+"  "+password;
    document.getElementById("out").innerText = text;
    console.log(username+"  "+password)
     
    
}
function register(){
    window.location.replace("index.html");
}


