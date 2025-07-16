// vars
var emailinput=document.querySelector("#Email");
var passwordinput=document.querySelector("#Password");
var signinEmailinput=document.querySelector("#signinEmail");
var signinPasswordinput=document.querySelector("#signinPassword");
var signinbutton=document.querySelector("#signin");
var nameinput=document.querySelector("#signupName");
var signupbutton=document.querySelector(".signup");
var successDiv=document.querySelector(".success");
var successAlert=document.querySelector("#successAlert");
var failedAlert=document.querySelector("#failedAlert");
var failedAlertSignin=document.querySelector("#failedAlertsignin");
var sec1=document.querySelector(".sec1");
// local storage
var users=[];
var userdata=localStorage.getItem("user");
if(userdata!=null){
    users=JSON.parse(userdata);
}
// validation
function isValidName(){
    var nameValue=nameinput.value;
    return nameValue.length>=3;
}
function isValidEmail() {
    var emailValue = emailinput.value;
    var emailRegex = /^[a-zA-Z][a-zA-Z0-9_\.]+@(gmail|yahoo)\.(com|net)$/;
    return emailRegex.test(emailValue);
}

function isValidPassword() {
    var passwordValue = passwordinput.value;
    var passwordRegex = /^[a-zA-Z]{1,}[0-9]{5,}$/;
    return passwordRegex.test(passwordValue);
}

function isValidForm(){
    var valid=true;
    if(!isValidName()){
        valid=false;
        nameinput.classList.add("is-invalid")
    }
    if(!isValidEmail()){
        valid=false;
        emailinput.classList.add("is-invalid")
    }
    if(!isValidPassword()){
        valid=false;
        passwordinput.classList.add("is-invalid")
    }
    return valid;
}
// validate inputs
    nameinput.addEventListener("input",function(){
        if(isValidName()){
            nameinput.classList.replace("is-invalid","is-valid");
            nameinput.classList.replace("input","is-valid")
            }else{
                nameinput.classList.add("is-invalid");
            }
})
emailinput.addEventListener("input",function(){
    if(isValidEmail()){
        emailinput.classList.replace("is-invalid","is-valid");
        emailinput.classList.replace("input","is-valid")
        }else{
            emailinput.classList.add("is-invalid");
        }
})
passwordinput.addEventListener("input",function(){
    if(isValidPassword()){
        passwordinput.classList.replace("is-invalid","is-valid");
        passwordinput.classList.replace("input","is-valid")
        }else{
            passwordinput.classList.add("is-invalid");
        }
})
// clear inputs
function clearInputs(){
    nameinput.value="";
    nameinput.classList.replace("is-valid","input")
    emailinput.value="";
    emailinput.classList.replace("is-valid","input")
    passwordinput.value="";
    passwordinput.classList.replace("is-valid","input")
}
// same values in inputs and storage signup
function sameValues(){
    users=JSON.parse(localStorage.getItem("user"))
    for(i=0;i<users.length;i++){
        var emailValue=emailinput.value;
        var passwordValue=passwordinput.value;
        var emaildata=users[i]?.emailValue;
        var passworddata=users[i]?.passwordValue;
                
        var same=false;
        if(emailValue==emaildata&&passwordValue==passworddata){
        same=true;
        }
    }
    
return same;
}
// same values in inputs and storage signin
function sameValuesSignin(){
    users=JSON.parse(localStorage.getItem("user"))
    for(i=0;i<users.length;i++){
        var emailValue=signinEmailinput.value;
        var passwordValue=signinPasswordinput.value;

        var emaildata=users[i]?.emailValue;
        var passworddata=users[i]?.passwordValue;
                
        var same=false;
        if(emailValue==emaildata&&passwordValue==passworddata){
        same=true;
        }
    }
    
return same;
}
// signin btn
signupbutton.addEventListener("click",function(){
        if(!isValidForm()){
            alert("Invalid form");
            return;
        }
        else{
            var user={
                nameValue:nameinput.value,
                emailValue:emailinput.value,
                passwordValue:passwordinput.value
            }
            if(sameValues()){
                failedAlert.classList.remove("d-none")
            }
            else{
                users.push(user)
                localStorage.setItem("user",JSON.stringify(users))
    
                console.log(users);
                successAlert.classList.remove("d-none");
                clearInputs();
            }
            
                
        }
        
        }
)
function display(VariableName){
        successDiv.innerHTML=`<div class="nav px-5 py-3 d-flex justify-content-between align-items-baseline">
        <div class="logo"><a class="navbar-brand text-white fs-4" href="#">SMART LOGIN</a></div>
        <div class="button"><button class="btn btn-outline-warning"><a class="nav-link text-white  " href="./signin.html" >Logout</a></button></div>
            </div>
            <div class="container mx-auto my-5 w-50 p-5 text-center">
                <h1>Welcome <span>${VariableName}</span></h1>
            </div>`
    }
    signinbutton.addEventListener("click",function (){
    if(sameValuesSignin()){
        successDiv.classList.remove("d-none");
        sec1.classList.add("d-none");

        for(i=0;i<users.length;i++){
            var rania=users[i]?.nameValue;
            console.log(rania);
            display(rania);
        }
        console.log(JSON.stringify(userdata.nameValue))
        }
    
    else{
        failedAlertSignin.classList.remove("d-none");
    }
    })
    


