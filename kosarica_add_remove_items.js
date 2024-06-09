const proizvodi = [
    {
        "id":0,
        "name": "makaron",
        "price": "7.99",
        "image":"makaron.JPG"
    },
    {
        "id":1,
        "name": "suncokret",
        "price": "6.99",
        "image":"suncokret.JPG"
    },
    {
        "id":2,
        "name": "kolac",
        "price": "2.99",
        "image":"kolac.jpg"
    }
]

var quantity=1;

let gumb_povecaj = document.getElementById('btn-povecaj');
let gumb_smanji = document.getElementById('btn-smanji');
let proizvod = document.getElementById('proizvod_kosarica');
let broj1 = document.getElementById('kosarica');
let broj2 = document.getElementById('broj2');
let broj12 = document.getElementById('broj1');
let add_btn1 = document.getElementById('add1');
let add_btn2 = document.getElementById('add2');

function broj1_style(){
    broj12.style.position=('absolute');
    broj12.style.backgroundColor=('#b31010');
    broj12.style.width=('20px');
    broj12.style.fontSize=('1rem');
    broj12.style.height=('20px');
    broj12.style.borderRadius=('50%');
    broj12.style.color=('#fff');
    broj12.style.fontWeight=('bold');
    broj12.style.display=('flex');
    broj12.style.justifyContent=('center');
    broj12.style.alignItems=('center');
    broj12.style.bottom=('5rem');
    broj12.style.transform=('translateX(20px)');
}

gumb_povecaj.onclick = function povecaj(){
    quantity+=1;
    broj1.textContent=quantity;
    broj2.textContent=quantity;
    broj1_style();
}

gumb_smanji.onclick = function smanji(){
    quantity-=1;
    broj1.textContent=quantity;
    broj2.textContent=quantity;
    broj1_style();
    if(quantity<1){
        proizvod.remove();
    }
}

//add_btn1.addEventListener("click", add_to_cart)
add_btn1.onclick=function(){
    add_to_cart();
}
add_btn2.addEventListener("click", add_to_cart)

let item_name = document.getElementById('name').textContent;


function add_to_cart(){ //this.id
    alert(item_name);
    const txt = '{"name":"makaron", "price":7.99}';
    const obj = JSON.parse(txt);
    let ime_proizvoda = obj.name;
    item_name=ime_proizvoda;
    alert(ime_proizvoda);
    alert(item_name);
    alert('2');
    setCookie("ime_proizvoda", ime_proizvoda.textContent, 365);
    alert('1');
    alert(getCookie("ime_proizvoda"));
}

submitBtn.addEventListener("click", () => {
    setCookie("ime_proizvoda", ime_proizvoda.textContent, 365);
    setCookie("lastName", lastText.value, 365);
});

function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() +  (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`
}
function deleteCookie(name){
    setCookie(name, null, null);
}
function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;
    
    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    })
    return result;
}
/*


cookieBtn.addEventListener("click", () => {
    firstText.value = getCookie("firstName");
    lastText.value = getCookie("lastName");
});

*/