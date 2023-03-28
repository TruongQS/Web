var bg = document.getElementsByClassName('P');

// bg[0].style.background = "linear-gradient(120deg,#3dffc9, #f7c723, #eb0ea5)";

var i=0;
var loops = null;
var out = null;

// out = setInterval( ()=>{
    loops = setInterval(() => {
            temp = "linear-gradient("+i.toString()+"deg,#3dffc9, #f7c723, #eb0ea5)";
            // console.log(temp);
            bg[0].style.background = temp;
            bg[1].style.background = temp;
            i+=2;
            if(i==360)i=0;
    }, 10);
// },2000);