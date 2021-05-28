// var randomNumber = function() {
//     const random = (Math.random() * 20) + 1;
//     return Math.floor(random);
// } 

var random = Math.floor((Math.random() * 20) + 1);

var  getNewRandom = () => random = Math.floor((Math.random() * 20) + 1);
var  changeBG = (x) => {
    x == 1 
    ? document.querySelector("#bg1").setAttribute("class" , "p-2 w-50 bg-success")
    : document.querySelector("#bg2").setAttribute("class" , "p-2 w-50 bg-success");
} 

var p1, p2 = 10;
var totalKazanma1, totalKazanma2 = 0;

var tahmin1 =  document.getElementById("tahmin1");
var tahmin2 =  document.querySelector("#tahmin2");
var kontrolButon1 = document.querySelector("#kontrol1");
var kontrolButon2 = document.querySelector("#kontrol2");
var puan1 = document.getElementById("p1");
var puan2 = document.getElementById("p2");
var total1 = document.getElementById("totalkazanma1");
var total2 = document.getElementById("totalkazanma2"); 

var kazanma = (x) => {
    if(x==1) {
        total1.innerHTML = ++ total1.innerHTML;
    }else {
        total2.innerHTML = ++ total2.innerHTML;
    }
} 

function puanAzalt(x) {
    if(x==1) {
        let p = puan1.innerHTML;  
        puan1.innerHTML = --p
        p == 0 ? kontrolButon1.disabled = true : null;
    } else {
        let p = puan2.innerHTML;  
        puan2.innerHTML = --p
        p == 0 ? kontrolButon2.disabled = true : null;
    }
  
} 

var toplamPuan = (x) => {
    if(x==1) {
        let puan =  puan1.innerHTML;
    parseInt(document.getElementById("totalPuan1").innerHTML) += Number(puan1.innerHTML);  
    }else {
        document.getElementById("totalPuan2").innerHTML +=puan2.innerHTML; 
    }
} 

var tekrarButonu  = document.querySelector("#tekraroyna");
tekrarButonu.addEventListener("click",() => {
    // getNewRandom();
    // kontrolButon1.disabled = false
    // kontrolButon2.disabled = false
    // puan1.innerHTML = 10;
    // puan2.innerHTML = 10;
    location.reload()
})



// Birinci oyuncu islemleri 

 // artir azalt butonlari ve islevleri
var artirButonu1  = document.querySelector("#artir1");
var azaltButonu1  = document.querySelector("#azalt1");
artirButonu1.addEventListener("click",() => {
    tahmin1.value <20
    ? tahmin1.innerHTML = ++ tahmin1.value  
    : null ; 
} ) 

azaltButonu1.addEventListener("click",() => {
    tahmin1.value > 0 
    ? tahmin1.innerHTML = --tahmin1.value  
    :tahmin1.disabled ;    
} ) 

var yonGoster = (x) => {
    switch (x) {
        case artirButonu1:
            azaltButonu1.setAttribute("class", "fs-3");
            artirButonu1.setAttribute("class", "fs-3 border-bottom border-5 border-dark");
            break;
        case azaltButonu1:
            artirButonu1.setAttribute("class", "fs-3");
            azaltButonu1.setAttribute("class", "fs-3  p-0 border-top border-5 border-dark");
                break; 
        case artirButonu2:
            azaltButonu2.setAttribute("class", "fs-3");
            artirButonu2.setAttribute("class", "fs-3 border-bottom border-5 border-dark");
            break;
        case azaltButonu2:
            artirButonu2.setAttribute("class", "fs-3");
            azaltButonu2.setAttribute("class", "fs-3  p-0 border-top border-5 border-dark");
                break;               
        default:
            break;

    }
} 

// tahmin1.onchange = () => {
//     t = document.getElementById("tahmin1").value;
//     console.log(t);
// };

// tahmin1.addEventListener('change', () => {
//     let t = document.getElementById("tahmin1").value;
// });

// birinci oyuncu sayi girisi ve kontrolu
kontrolButon1.addEventListener("click", () => {
    let birinciOyuncuTahmin = document.getElementById("tahmin1").value;

    if(birinciOyuncuTahmin == random) {
        console.log("Tebrikler kazandiniz");
        getNewRandom();
        changeBG(1);
        kazanma(1);
        toplamPuan(1);

    }else {
        if( birinciOyuncuTahmin > random) {
                console.log("azalt");
                puanAzalt(1);
                yonGoster(azaltButonu1);
        }else {
                console.log("artir");
                puanAzalt(1);
                yonGoster(artirButonu1);
                
        }
    }
})

// Ikinci oyuncu islemleri

var artirButonu2  = document.querySelector("#artir2");
var azaltButonu2  = document.querySelector("#azalt2");
artirButonu2.addEventListener("click",() => {
    tahmin2.value <20
    ? tahmin2.innerHTML = ++ tahmin2.value  
    :tahmin2.innerHTML = 20 ; 
} ) 

azaltButonu2.addEventListener("click",() => {
    tahmin2.value > 0 
    ? tahmin2.innerHTML = --tahmin2.value  
    :tahmin2.innerHTML = 0 ;    
} ) 

kontrolButon2.addEventListener("click", () => {
    let ikinciOyuncuTahmin = document.getElementById("tahmin2").value;
    // console.log(random);
    if(ikinciOyuncuTahmin == random) {
        console.log("Tebrikler kazandiniz");
        getNewRandom();
        changeBG(2);
        kazanma(2);
        toplamPuan(2);
    }else {
        if( ikinciOyuncuTahmin > random) {
                console.log("azalt");
                puanAzalt(2)
                yonGoster(azaltButonu2)
        }else {
                console.log("artir");
                puanAzalt(2);
                yonGoster(artirButonu2)
        }
    }
})


