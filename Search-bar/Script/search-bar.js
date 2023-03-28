var searchBar = document.getElementById('Searching-bar');

var inp = document.getElementById('inp');
var menu = document.getElementById('menu');
var phone_menu = document.getElementById('phone_menu');
var X = document.getElementById("X");
function onMenuClick() {
    console.log("clicked");

    searchBar.style.height = "100%";
    searchBar.style.width = "100%";
    searchBar.style.left = "0%";
    searchBar.style.transform = "none";
    searchBar.style.padding = "0px";

    phone_menu.style.display = "block";
    phone_menu.style.filter = "blur(0px)";
    phone_menu.style.opacity = "1";
}

function onCloseClick() {
    searchBar.style.height = "45px";
    searchBar.style.width = "99.5%";
    searchBar.style.left = "50%";
    searchBar.style.transform = "translate(-50%,100%)";
    searchBar.style.paddingBottom = "50px";

    phone_menu.style.display = "none";
    phone_menu.style.filter = "blur(2px)";
    phone_menu.style.opacity = "0";
}
menu.addEventListener('click',onMenuClick);
X.addEventListener('click',onCloseClick);


    // document.getElementById('X').addEventListener('click',onCloseMenuClick);

function onHover() {
    inp.style.width = '65%';
    inp.addEventListener('blur',notHover);
    inp.removeEventListener('focus',onHover);
}

function notHover() {
inp.style.width = '30%';
    inp.addEventListener('focus',onHover);
    inp.removeEventListener('blur',notHover);
}

inp.addEventListener('focus',onHover);