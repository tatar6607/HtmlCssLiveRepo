import yorumlar from "./data.js";

// icerik locators
const kisiResim = document.querySelector("#kişi-resim");
const yazar = document.querySelector("#yazar");
const meslekp = document.querySelector("#meslek");
const aciklamap = document.querySelector("#açıklama");

// button locators
const sol = document.querySelector(".geri-btn");
const sag = document.querySelector(".ileri-btn");
const sasirt = document.querySelector(".rasgele-div");

let seciliYorum = 0;
// console.log("toplam yorum", seciliYorum);

const loadComment = () => {
  let yorum = yorumlar[seciliYorum];
  let { photo, adSoyad, meslek, aciklama } = yorum;
  kisiResim.src = photo;
  yazar.innerHTML = adSoyad;
  meslekp.innerHTML = meslek;
  aciklamap.innerHTML = aciklama;
};

loadComment();

sol.onclick = () => {
  // console.log(seciliYorum);
  seciliYorum <= 0 ? (seciliYorum = yorumlar.length) : null;
  --seciliYorum;
  loadComment();
};

sag.onclick = () => {
  // console.log(seciliYorum);
  seciliYorum >= yorumlar.length - 1 ? (seciliYorum = -1) : null;
  ++seciliYorum;
  loadComment();
};

sasirt.onclick = () => {
  let rndm = Math.floor(Math.random() * yorumlar.length);
  while (seciliYorum == rndm) {
    rndm = Math.floor(Math.random() * yorumlar.length);
  }
  seciliYorum = rndm;
  loadComment();
};
