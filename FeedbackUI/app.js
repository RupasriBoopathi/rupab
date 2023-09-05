const ratingEls=document.querySelector(".ratings");
const  btnEl=document.getElementById("btn");
const containerEl=document.querySelector(".conatiner");

const selectedRating="";

ratingEls.forEach((ratingEl)=>{
     ratingEl.addEventListener("click",(event)=>{
        removeEl();
        selectedRating=event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");

     });
});
btnEl.addEventListener("click",()=>{
    if(selectedRating!==""){
        containerEl.innerHTML=`<strong>Thank you!</strong>`
        



        
    }
    
})


function removeEl(){
    ratingEls.forEach((ratingEl)=>{
    ratingEl.classList.remove("active");
});
}