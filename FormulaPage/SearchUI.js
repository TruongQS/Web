var input = document.getElementById("Search");

var loops = null;

var Formula = document.getElementsByClassName("F");

function Searching(Words){

}

function StartSearch(){
    loops = setInterval(()=>{
        if(input.value != "")console.log(Searching(input.value));
    },500)
}

function DoneSearch(){
    clearInterval(loops);
}

input.addEventListener("focus",StartSearch);
input.addEventListener("blur",DoneSearch);
