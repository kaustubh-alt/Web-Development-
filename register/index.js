function neew(){
    var name = document.getElementById('name').value;
    var conte = document.getElementById('pass').value;    
    
    console.log(name);
    if (name == "") {
        console.log("enter name")
        document.getElementById("til").innerText = "Enter name";
    }
    else if (conte == "") {
        console.log("enter Password")
        document.getElementById("til").innerText = "Enter Password";
    }
    else{
        var cont = name+" Registered Successfully";
        const op =document.getElementById("comp"); 
        op.innerText = cont;
    }
    
}
function log(){
    window.location.replace("index2.html");  
}


