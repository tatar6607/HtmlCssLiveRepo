
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
    tekButton.innerHTML = "KAPAT"
  }else {
    resim.src = "./img/lamba_off.gif";
    isClosed= !isClosed;
    tekButton.innerHTML = "AC" 
  }
})

resim.addEventListener('mouseover', () => {
  resim.src = "./img/lamba_on.gif";
})

resim.addEventListener('mouseout', () => {
  resim.src = "./img/lamba_off.gif";
})


// Input => yazi buyutme

const adiniz = document.getElementById("adiniz");
const cbox = document.querySelector("#cbox");


adiniz.addEventListener("keyup",() => {
  cbox.checked 
  ? adiniz.value = adiniz.value.toUpperCase() 
  : adiniz.value = adiniz.value.toLowerCase();
});

// Yeni eleman ekleme
const h1 = document.createElement("h1");
const text = document.createTextNode("Programlama Dilleri");
h1.appendChild(text);

  // document.body.appendChild(h1); // istenilirse direk sayfanin sonuna eklenbilir
const sonDiv = document.querySelector(".input-div");
sonDiv.after(h1); // son divden sonra ekleme yapar



h1.setAttribute("class", "mt-5 text-center text-danger fs-3");

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