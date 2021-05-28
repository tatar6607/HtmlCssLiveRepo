// var randomNumber = function() {
//     const random = (Math.random() * 20) + 1;
//     return Math.floor(random);
// } 

const random = Math.floor((Math.random() * 20) + 1);

var p1, p2 = 10;
var totalPuan1, totalPuan2;

var tahmin1 =  document.getElementById("tahmin1");
var tahmin2 =  document.querySelector("#tahmin2");
var kontrolButon1 = document.querySelector("#kontrol1");
var kontrolButon2 = document.querySelector("#kontrol2");

// Birinci oyuncu islemleri 

 // artir azalt butonlari ve islevleri
var artirButonu1  = document.querySelector("#artir1");
var azaltButonu1  = document.querySelector("#azalt1");
artirButonu1.addEventListener("click",() => {
    tahmin1.value <20
    ? tahmin1.innerHTML = ++ tahmin1.value  
    :tahmin1.innerHTML = 20 ; 
} ) 

azaltButonu1.addEventListener("click",() => {
    tahmin1.value > 0 
    ? tahmin1.innerHTML = --tahmin1.value  
    :tahmin1.innerHTML = 0 ;    
} ) 


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
    }else {
        if( birinciOyuncuTahmin > random) {
                console.log("azalt");
        }else {
                console.log("artir");
        }
    }
})

// Ikinci oyuncu islemleri

var artirButonu1  = document.querySelector("#artir2");
var azaltButonu1  = document.querySelector("#azalt2");
artirButonu1.addEventListener("click",() => {
    tahmin2.value <20
    ? tahmin2.innerHTML = ++ tahmin2.value  
    :tahmin2.innerHTML = 20 ; 
} ) 

azaltButonu1.addEventListener("click",() => {
    tahmin2.value > 0 
    ? tahmin2.innerHTML = --tahmin2.value  
    :tahmin2.innerHTML = 0 ;    
} ) 

kontrolButon2.addEventListener("click", () => {
    let ikinciOyuncuTahmin = document.getElementById("tahmin2").value;
    if(ikinciOyuncuTahmin == random) {
        console.log("Tebrikler kazandiniz");
    }else {
        if( ikinciOyuncuTahmin > random) {
                console.log("azalt");
        }else {
                console.log("artir");
        }
    }
})


