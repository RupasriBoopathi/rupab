const questionEl=document.getElementById("question");
const inputEl=document.getElementById("input");
const formEl=document.getElementById("form")

let score=updateLocalstorage.getitem;
 const num1=Math.ceil(Math.random()*10);
 const num2=Math.ceil(Math.random()*10);

 questionEl.innerText=`What is ${num1} multiply of ${num2}?`;

 let correctAns=num1*num2;

 formEl.addEventListener("submit",()=>{
    let userAns = +inputEl.value;
    if(correctAns===userAns)
    {
     score++;
     updateLocalstorage();
    }
    else{
        score--;
        updateLocalstorage();
    }
   

 })
 function updateLocalstorage(){
    LocalStorage.setItem("score", JSON.stringify(score));

 } 
 
 
