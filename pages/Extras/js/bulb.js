// Ac butonuna her tiklandiginda lamba_on resmini goster.
document.querySelector(".on").onclick = function () {
    document.querySelector(".resim").src = "./img/lamba_on.gif";
  };
  // Kapa butonuna her tiklandiginda lamba_off resmini goster.
  document.querySelector(".off").onclick = function () {
    document.querySelector(".resim").src = "./img/lamba_off.gif";
  };
  // resmin uzerine mouse her geldiginde lamba_on resmini goster.
  document.querySelector(".resim").addEventListener("mouseover", () => {
    document.querySelector(".resim").src = "./img/lamba_on.gif";
  });
  // resmin uzerinden mouse her ayrıldiginda lamba_off resmini goster.
  document.querySelector(".resim").addEventListener("mouseout", function () {
    document.querySelector(".resim").src = "img/lamba_off.gif";
  });