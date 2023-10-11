let container = document.querySelector(".container")
let resetBtn = document.querySelector(".reset")
let rgbBtn = document.querySelector(".rgb")
let normalBtn = document.querySelector(".normal")

var primaryMouseButtonDown = false;

function setPrimaryButtonState(e) {
  var flags = e.buttons !== undefined ? e.buttons : e.which;
  primaryMouseButtonDown = (flags & 1) === 1;
}
document.addEventListener("mousedown", setPrimaryButtonState);
document.addEventListener("mousemove", setPrimaryButtonState);
document.addEventListener("mouseup", setPrimaryButtonState);

resetBtn.addEventListener('click', () => {
    size = prompt("Size? :");
    removeGrid();
    generateGrid(size);
    mouseOverAdd();
});

rgbBtn.addEventListener('click', ()=>{rgbDivChanger()});
normalBtn.addEventListener('click', ()=>{mouseOverAdd()});

function generateGrid(size = 16){
    let box = document.createElement("div");
    box.setAttribute("class", "box");
    container.appendChild(box)
    for (let i = 0; i < size; i++){
        let divRow = document.createElement("div");
        divRow.setAttribute("class", "divRow");
        box.appendChild(divRow);
        for (let j = 0; j < size; j++){
            let divElement = document.createElement("div");
            divElement.setAttribute("class", "divElement");
            divRow.appendChild(divElement);
        }
    }
}



function mouseOverAdd() {
    let divs = document.querySelectorAll(".divElement");    
    divs.forEach((div) =>{
        div.addEventListener('mouseover', (event)=> {
            if (primaryMouseButtonDown){
                div.setAttribute("class", "divElementHover")
            }}            
        )
    });    
}

function rgbDivChanger(){
    let divs = document.querySelectorAll(".divElement");
    divs.forEach((div) =>{
        div.addEventListener('mouseover', (event)=>{
        if (primaryMouseButtonDown){
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            div.style.backgroundColor = "#" + randomColor;
            }}
        )
    })
}


function removeGrid(){
    let box = document.querySelector(".box");
    container.removeChild(box);
};


generateGrid();
mouseOverAdd();
