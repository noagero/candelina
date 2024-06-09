var kosarica = document.getElementById("kosarica");
var zatvori = document.getElementById("zatvori");
var cart1 = document.getElementById("cart");

kosarica.onclick = function otvori(){
    cart1.style.right='0';
}

zatvori.onclick = function zatvori(){
    cart1.style.right='-100%';
}