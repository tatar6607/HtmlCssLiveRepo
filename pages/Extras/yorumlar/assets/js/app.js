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
    aciklama: "Ese dosta tavsiye ediyorum O derece.",
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
    aciklama: "Fiyat/Performans urun beyler kacmaz Verdigin paraya degiyor :)",
  },
];

let seciliYorum = yorumlar.length - 1;
// console.log("toplam yorum", seciliYorum);

const loadComment = (x, i = 0) => {
  if (x == "random") {
    let randomIndex = Math.floor(Math.random() * yorumlar.length);
    i = randomIndex;
  }
  seciliYorum = i;
  let yorum = yorumlar[i];
  let { photo, adSoyad, meslek, aciklama } = yorum;
  // console.log(photo, adSoyad, meslek, aciklama);
  kisiResim.src = photo;
  yazar.innerHTML = adSoyad;
  meslekp.innerHTML = meslek;
  aciklamap.innerHTML = aciklama;
};

loadComment("normal");

sol.onclick = () => {
  console.log(seciliYorum);
  seciliYorum <= 0 ? (seciliYorum = yorumlar.length) : null;
  loadComment("normal", --seciliYorum);
};

sag.onclick = () => {
  console.log(seciliYorum);
  seciliYorum >= yorumlar.length - 1 ? (seciliYorum = -1) : null;
  loadComment("normal", ++seciliYorum);
};

sasirt.onclick = () => {
  loadComment("random");
};
