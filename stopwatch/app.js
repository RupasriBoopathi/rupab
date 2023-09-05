const start=document.getElementById('startbtn')
const stop=document.getElementById('stopbtn')
const reset=document.getElementById('resetbtn')



let hrs=min=sec=ms=0,startTimer;
start.addEventListener('click',()=>{
    start.classList.add('startbtn-active');
    stop.classList.remove('stopbtn-active');

   startTimer=setInterval(()=>{
    ms++;
    if(ms==100){
    sec++;
    ms=0;
   }
   if(sec==60){
   min++;
   sec=0;
   }
   if(min==60){
    hrs++;
    min=0;
   }
  updateDisplay();
   },10)
})
stop.addEventListener('click',()=>{
    start.classList.remove('startbtn-active');
    stop.classList.add('stopbtn-active');
    clearInterval(startTimer);
})
reset.addEventListener('click',()=>{
    start.classList.remove('startbtn-active');
    stop.classList.remove('stopbtn-active');
     hrs=min=sec=ms=0;
     clearInterval(startTimer);
     updateDisplay()

    
})


function updateDisplay(){
    phrs=hrs<10?'0'+hrs:hrs;
    pmin=min<10?'0'+min:min;
    psec=sec<10?'0'+sec:sec;
    pms=ms<10?'0'+ms:ms;

    document.querySelector('.hrs').innerText=phrs;
    document.querySelector('.min').innerText=pmin;
    document.querySelector('.sec').innerText=psec;
    document.querySelector('.ms').innerText=pms;
}
