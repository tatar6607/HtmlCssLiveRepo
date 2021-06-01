// icerik locators
const kisiResim = document.querySelector("#kişi-resim");
const yazar = document.querySelector("#yazar");
const meslekp = document.querySelector("#meslek");
const aciklamap = document.querySelector("#açıklama");

// button locators
const sol = document.querySelector(".geri-btn");
const sag = document.querySelector(".ileri-btn");
const sasirt = document.querySelector(".rasgele-div");

// icerik
let yorumlar = [
  {
    photo:
      "https://cdn.pixabay.com/photo/2014/03/24/17/19/teacher-295387_960_720.png",
    adSoyad: "Ayse Yilmaz",
    meslek: "Web Tasarimci",
    aciklama: "Bu urunler bir harika dostum.",
  },

  {
    photo:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    adSoyad: "Ali Hamarta",
    meslek: "Muhendis",
    aciklama: "Ese dosta tavsiye ediyorum o derece...",
  },

  {
    photo:
      "https://cdn.pixabay.com/photo/2016/11/01/21/11/avatar-1789663_960_720.png",
    adSoyad: "Ayhan Canli",
    meslek: "Web Tasarimci",
    aciklama: "Iyiki almisim fiyatlar uctu.",
  },

  {
    photo:
      "https://cdn.pixabay.com/photo/2021/05/25/06/55/child-6281555_960_720.png",
    adSoyad: "Nukhet Duru",
    meslek: "Sanatci",
    aciklama: "Ikinci elde fiyat dusmuyor. Sagol GittiBurada :)",
  },

  {
    photo:
      "https://cdn.pixabay.com/photo/2016/12/13/16/17/dancer-1904467_960_720.png",
    adSoyad: "Murtaza Elibol",
    meslek: "Developer",
    aciklama: "Kacirma derim tukenmeden al",
  },

  {
    photo: "./assets/images/sample.png",
    adSoyad: "Eric Jhonson",
    meslek: "Gezgin",
    aciklama: "Fiyat/Performans urunu beyler verdiginiz paraya degiyor :)",
  },
];

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
  console.log("secili yorum", seciliYorum);
  while (seciliYorum == rndm) {
    rndm = Math.floor(Math.random() * yorumlar.length);
    console.log("ic random", rndm);
  }
  console.log("son random", rndm);
  seciliYorum = rndm;
  loadComment();
};
