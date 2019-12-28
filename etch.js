const container = document.querySelector("#container")
const options = document.querySelector("#options")
const gridArea = document.createElement('div')
const status = document.querySelector("#status")
gridArea.className="grid";
container.appendChild(gridArea);
var size = 16;
var cells;
var sizeStatus = "16 x 16 grid!";
var settingStatus = " On Black Mode!";
status.innerHTML = sizeStatus + settingStatus;  
//Function to initialize grid
function createGrid(b){
    for(i=0;i<b*b; i++){
        let cell = document.createElement('div');
        cell.className = "gridCell";
        cell.style.height = (400/b) + "px";
        cell.style.width = (400/b) + "px";
        gridArea.appendChild(cell);
        
}
    gridArea.addEventListener("mouseover", black)
    
        
    
    return gridArea;
}
createGrid(size); 
options.addEventListener("click", function(e){
    if(e.target.id == "black"){
        gridArea.removeEventListener("mouseover", darken);
        gridArea.removeEventListener("mouseover", rainbow);
        gridArea.addEventListener("mouseover", black); 
        settingStatus = " On Black Mode!"; 
    }
    else if(e.target.id == "darken"){
        gridArea.removeEventListener("mouseover", black);
        gridArea.removeEventListener("mouseover", rainbow);
        gridArea.addEventListener("mouseover", darken);
        settingStatus = " On Darken Mode!"; 
    }
    else if(e.target.id == "rainbow"){
        gridArea.removeEventListener("mouseover", darken);
        gridArea.removeEventListener("mouseover", black);
        gridArea.addEventListener("mouseover", rainbow);
        settingStatus = " On Rainbow Mode!"; 
    }
    status.innerHTML = sizeStatus + settingStatus;
})

function rainbow(e){
if(e.target.className === "gridCell"){
    e.target.style.background = randomColor();

}
}
function randomColor(){
    return 'rgb('+ Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ')';
    
}
function black(e){
if(e.target.className === "gridCell"){
    e.target.style.background = "black";
}
}
function darken(e){
if(e.target.className === "gridCell"){
    e.target.style.background = "black";
    let o = e.target.style.opacity;
    e.target.style.opacity = (Number(o) + 0.1);
    
}
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
        gridArea.innerHTML="";
        size=a;
        createGrid(size);
        sizeStatus = size + " x " + size + " grid!";
        status.innerHTML = sizeStatus + settingStatus;
    }
}