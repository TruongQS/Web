var menu = document.getElementById("SelectionMenu");

function onCloseEvent() {
    document.getElementById("FMenu").style.opacity = "0";
    setTimeout(()=>{
        document.getElementById("FMenu").style.display = "none";
        menu.addEventListener("click",onOpenEvent);
        menu.removeEventListener("click",onCloseEvent);
    },250);


}

function onOpenEvent() {
    document.getElementById("FMenu").style.display = "flex";
    document.getElementById("FMenu").style.opacity = "1";
    menu.addEventListener("click",onCloseEvent);
    menu.removeEventListener("click",onOpenEvent);
}

menu.addEventListener("click",onOpenEvent);


