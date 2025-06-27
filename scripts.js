let input=document.querySelector("input")
function addval(elementvalue){
    input.value+=elementvalue;
}

function clearint(){
    input.value=input.value.slice(0,-1);
}

function allClearint(){
    input.value=("")
}

function calculate(){
    input.value=eval(input.value);
}