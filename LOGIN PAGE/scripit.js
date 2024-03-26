let email= document.getElementById("Email");
let password=document.getElementById("password");
let button= document.querySelectorAll("button");

const string=email;
let arr = Array.from(button);

arr.forEach(button => {
    button.addEventListener("click", (e)=> {

        if(e.target.innerHTML== Email){
            string=email
            input.value=string;
            alert("you are loggined successfully");
        }
        else{
            alert("your account doesn't exist");
        }
        console.log(email);
    })
});