
const onButton = document.querySelector(".on");
const offButton = document.querySelector(".off");
const tekButton = document.querySelector(".tek");  
const resim = document.querySelector(".resim");
let isClosed = true;

onButton.addEventListener('click', () => {
  resim.src ="./img/lamba_on.gif"; 
})

offButton.addEventListener('click', () => {
  resim.src = "./img/lamba_off.gif";
})

tekButton.addEventListener("click", () => {
  if(isClosed) {
    resim.src ="./img/lamba_on.gif";
    isClosed= !isClosed; 
  }else {
    resim.src = "./img/lamba_off.gif";
    isClosed= !isClosed; 
  }
})

resim.addEventListener('mouseover', () => {
  resim.src = "./img/lamba_on.gif";
})

resim.addEventListener('mouseout', () => {
  resim.src = "./img/lamba_off.gif";
})




// Ac butonuna her tiklandiginda lamba_on resmini goster.
// document.querySelector(".on").onclick = function () {
//     document.querySelector(".resim").src = "./img/lamba_on.gif";
//   };
   // Kapa butonuna her tiklandiginda lamba_off resmini goster.
//   document.querySelector(".off").onclick = function () {
//     document.querySelector(".resim").src = "./img/lamba_off.gif";
//   };
   // resmin uzerine mouse her geldiginde lamba_on resmini goster.
//   document.querySelector(".resim").addEventListener("mouseover", () => {
//     document.querySelector(".resim").src = "./img/lamba_on.gif";
//   });
   // resmin uzerinden mouse her ayrıldiginda lamba_off resmini goster.
//   document.querySelector(".resim").addEventListener("mouseout", function () {
//     document.querySelector(".resim").src = "img/lamba_off.gif";
//   });