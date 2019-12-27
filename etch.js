const container = document.querySelector('.container');
const gridArea = document.querySelector('#grid');


//Function to initialize grid
function createGrid(b){
    for(i=0;i<b*b; i++){
        let cell = document.createElement('div');
        cell.className = "gridCell";
        cell.style.height = (400/b) + "px";
        cell.style.width = (400/b) + "px";
        cell.setAttribute('style','opacity:0.3');
        gridArea.appendChild(cell);    
}
    return gridArea;
}
createGrid(16); 


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
    else if(isNaN(a)){
        alert("NaN");
    }
    else {
        
    }
}