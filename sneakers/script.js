const wrapperEL=document.getElementById("sliderwrapper");
const menuEl=document.querySelectorAll(".menuItem");


const products = [
   {
     id: 1,
     title: "Air Force",
     price: 119,
     colors: [
       {
         code: "black",
         img: "./air.png",
       },
       {
         code: "darkblue",
         img: "./air2.png",
       },
     ],
   },
   {
     id: 2,
     title: "Air Jordan",
     price: 149,
     colors: [
       {
         code: "lightgray",
         img: "./jordan.png",
       },
       {
         code: "green",
         img: "./jordan2.png",
       },
     ],
   },
   {
     id: 3,
     title: "Blazer",
     price: 109,
     colors: [
       {
         code: "lightgray",
         img: "./blazer.png",
       },
       {
         code: "green",
         img: "./blazer2.png",
       },
     ],
   },
   {
     id: 4,
     title: "Crater",
     price: 129,
     colors: [
       {
         code: "black",
         img: "./crater.png",
       },
       {
         code: "lightgray",
         img: "./crater2.png",
       },
     ],
   },
   {
     id: 5,
     title: "Hippie",
     price: 99,
     colors: [
       {
         code: "gray",
         img: "./hippie.png",
       },
       {
         code: "black",
         img: "./hippie2.png",
       },
     ],
   },
 ];
 
 let choosenProduct = products[0];

 const imgEl=document.querySelector(".productImg");
 const titleEl=document.querySelector(".productTitle");
 const priceEl=document.querySelector(".productprice");
 const colorEl=document.querySelectorAll(".color");
 const sizeEl=document.querySelectorAll(".sizes");


   menuEl.forEach((item,index)=>{

   item.addEventListener("click", ()=>{
      wrapperEL.style.transform=`translateX(${-100*index}vw)`;
   
     choosenProduct=products[index];
     titleEl.textContent=choosenProduct.title;
     priceEl.textContent="$"+choosenProduct.price;
     imgEl.src=choosenProduct.colors[0].img;
     
     colorEl.forEach((color ,index) => {
       color.style.backgroundColor = choosenProduct.colors[index].code;
     });


   });
});


