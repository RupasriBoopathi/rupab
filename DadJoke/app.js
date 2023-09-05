const buttonEl=document.getElementById("btn");
const jokeEl=document.getElementById("joke");

const apiURL="AbOw6lA2+pbfa2tQuztL3A==HPUkoajxDpnOWAmg";
const dadjoke="https://api.api-ninjas.com/v1/dadjokes?limit=1";
const options={
    method:"GET",
    headers:{
        "X-Api-Key":apiURL,
    },

};
async function getJoke(){
   
  try {
    jokeEl.innerText="Updating...";
    buttonEl.disabled=true;
    buttonEl.innerText="Loading..."
 
    const response= await fetch(dadjoke,options);
    const data= await response.json();
    jokeEl.innerHTML=data[0].joke;
 
    buttonEl.disabled=false;
    buttonEl.innerText="Tell me a joke"
 
  } catch (error) {
    jokeEl.innerText="An Error Happened So, Try Again Later";
    
    buttonEl.disabled=false;
    buttonEl.innerText="Tell me a joke"
     console.log(error);
  }
}

buttonEl.addEventListener("click",getJoke);