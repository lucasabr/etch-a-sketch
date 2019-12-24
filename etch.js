for(var i=0; i<16; i++){
    for(var b=0; b<16; b++){
        document.createElement("div");
        div.setAttribute("background-color","white");
    }
}

function rainbow(){

}
function black(){

}
function darken(){

}
function clear(){

}
function resize(){
    var a = prompt("Choose any number from 1-100");
    if(a>100 || a<1){
        alert("Choose a number from 1-100");
    }
    else if(a === parseInt(a,10)){
        
    }
    else {
        alert("NaN");
    }
}