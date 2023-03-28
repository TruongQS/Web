
var text_value = document.querySelectorAll("#KeyCapContainer button");

var basicCal = document.getElementsByClassName("BasicCalculation");

var ResultV = document.getElementById("FResultViewer");

var FViewer = document.getElementById("FView");

let promise = Promise.resolve();  // Used to hold chain of typesetting calls

var StrResult = "";
var Result = 0;
var id;
var StrStorage;

//---------------CÁC HÀM HỖ TRỢ----------------

function typeset(code) {
    promise = promise.then(() => MathJax.typesetPromise(code()))
    .catch((err) => console.log('Typeset failed: ' + err.message));
    return promise;
}



function replaceChar(string, index, replacement) {
    return (
      string.slice(0, index) +
      replacement +
      string.slice(index + replacement.length)
      );
}

function deleteChar(string,index){
    return (
        string.slice(0,index) +
        string.slice(index+1)
    );
}

//---------------CÁC HÀM THỰC HIỆN LỆNH----------------

function addValue(e){
    let string = this;
    try {
        FViewer.innerHTML += string.innerHTML;
        StrResult += string.value;
    }
    catch(err){
        console.log("error occured");
    }
    Result = eval(StrResult);
    ResultV.innerHTML = Result;
}
function change(string,isClearDisplay){
    for (let i=0;i<string.length;i++){
        //console.log(string[i]," i= ",i,"\n",string[i+1]," i+1= ",i+1);
        if(string[i] == '*' && string[i+1] == '*'){
            console.log(`this ${string[i]} is modified to ^ at i = ${i}`);
            string = replaceChar(string,i,"^");
            string = deleteChar(string,i+1);
        }
        else if(string[i] == '*')
        {
            console.log(`this ${string[i]} is modified to x at i = ${i}`);
            string = replaceChar(string,i,'x');
        }
    }
    var temp = FViewer.innerHTML;
    if(temp[temp.length-1] == '^'){
        console.log(`this ${string} and ${StrResult} is modified to null`);
        string = deleteChar(string,string.length-1);
        StrResult = deleteChar(StrResult,StrResult.length-1);
    }
    return string;
}

function financial(x,num) {
    return Math.round(x*(Math.pow(10,num)))/Math.pow(10,num);
}


function clearDisplay(){
    StrResult = StrResult.slice(0,StrResult.length-1);
    try {
        Result = eval(StrResult);
    }
    catch(err){
        console.log("Error result: "+StrResult);
        FViewer.innerHTML = change(StrResult);
        if(StrResult == "")ResultV.innerHTML = "";
        else ResultV.innerHTML = Result;
        return;
    }
    if (Result % 1 != 0){
        Result = financial(Result,4);
    }
    console.log("Normal Result");
    FViewer.innerHTML = change(StrResult);

    if(StrResult == "")ResultV.innerHTML = "";
    else ResultV.innerHTML = Result;
}


function myKeyPress(e){
    var keynum;
    if(window.event) { // IE                  
        keynum = e.keyCode;
    }
    keynum=String.fromCharCode(keynum);
    if (keynum >= "0" && keynum <= "9"){
        FViewer.innerHTML += keynum;
        StrResult += keynum;
    }
    else if (keynum == "+" ||
            keynum == "-" ||
            keynum == "/" ||
            keynum == "(" ||
            keynum == ")" ||
            keynum == "."){
        FViewer.innerHTML += keynum;
        StrResult += keynum;
    }
    else if(keynum == "*"){
        FViewer.innerHTML += "x";
        StrResult += keynum;
    }
    else if(keynum == "x" || keynum=="X"){
        FViewer.innerHTML += "x";
        StrResult += "*";
    }
    else if(keynum == "^"){
        FViewer.innerHTML += "^";
        StrResult += "**";
    }
    Result = eval(StrResult);
    if (Result % 1 != 0){
        Result = financial(Result,4);
    }
    if(isNaN(Result))ResultV.innerHTML = "";
    else ResultV.innerHTML = Result;
}

function keyShortCut(e){
    if (e.ctrlKey && e.shiftKey && e.keyCode==8){ 
        FViewer.innerHTML = "";
        ResultV.innerHTML = "";
        StrResult = "";
    }else if (e.keyCode == 8 && StrResult != "")clearDisplay();
}

function AdvOperation(e){
    id = e.target.id;
    ResultV.innerHTML = "";
    switch (id) {
        case ("sqrt"):
            StrResult = "(" + StrResult + ")" + "**(1/2)";
            break;
        case ("pow2"):
            StrResult = "(" + StrResult + ")" + "**2";
            break;
        case ("pow3"):
            StrResult = "(" + StrResult + ")" + "**3";
            break;
        case ("xsqrt"):
            StrResult = "(" + StrResult + ")" + "**(1/";
            FViewer.innerHTML = "(" + FViewer.innerHTML + ")^(1/";
            
            break;
        case ("powx"):
            StrResult = "(" + StrResult + ")" + "**(";
            FViewer.innerHTML = "(" + FViewer.innerHTML + ")^(";
            break;
    }
    Result = eval(StrResult);
    if (Result % 1 != 0){
        Result = financial(Result,4);
    }
    FViewer.innerHTML = change(StrResult);
    if(isNaN(Result))ResultV.innerHTML = "";
    else ResultV.innerHTML = Result;
}

//-------------THỰC HIỆN CÁC LỆNH------------

for (let i=0;i<18;i++){
    let value = text_value[i];
    value.addEventListener("click",addValue);
}

document.getElementById("Delete").addEventListener("click",()=>{
    FViewer.innerHTML = "";
    ResultV.innerHTML = "";
    StrResult = "";
})


document.getElementById("Clear").addEventListener("click",clearDisplay);

window.addEventListener("keypress",myKeyPress);
window.addEventListener("keydown",keyShortCut);

document.getElementById("sqrt").addEventListener("click",AdvOperation)
document.getElementById("pow2").addEventListener("click",AdvOperation)
document.getElementById("pow3").addEventListener("click",AdvOperation)
document.getElementById("xsqrt").addEventListener("click",AdvOperation)
document.getElementById("powx").addEventListener("click",AdvOperation)

//Lỗi: xsqrt,xpowy
//Bỏ: nPr,nCr