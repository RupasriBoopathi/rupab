const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');

function checkRequired(inputs){
    inputs.forEach((input )=> {
        if(input.value .trim()===""){
            errorInput(input,'Please fill');
        }
        else
{
            successInput(input);
}
        
    });
}
function errorInput(input,message){
    const fromGroup=input.parentElement;
    fromGroup.className="form-group error";
    const p=fromGroup.querySelector("p");
    p.innerHTML=message;
}
function successInput(input){
    const fromGroup=input.parentElement;
    fromGroup.className="form-group success";
    const p=fromGroup.querySelector("p");
    p.innerHTML="";
}

form.addEventListener("submit",function(e){
    e.preventDefault();
    checkRequired([username,email,password,password2]);
})

