'lfunction validateform(){
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    if (username === "" || password === ""){
        document.getElementById("message").innerHTML="please fill the form";
    }
    else if(password.length<8){
        document.getElementById("message").innerHTML="password must be at least 8 charactert";
    }
    else{
        document.getElementById("message").innerHTML="login successfully";
    }
}