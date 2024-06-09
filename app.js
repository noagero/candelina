var kosarica = document.getElementById("kosarica");
var zatvori = document.getElementById("zatvori");
var cart = document.getElementById("cart");

kosarica.onclick = function otvori(){
    cart.style.right='0';
}

zatvori.onclick = function zatvori(){
    cart.style.right='-100%';
}