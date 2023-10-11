let container = document.querySelector(".container")
let resetBtn = document.querySelector(".reset")
let divs = document.querySelectorAll(".divElement");


generateGrid();
mouseOverAdd();

resetBtn.addEventListener('click', () => {
    size = prompt("Size? :");
    removeGrid();
    generateGrid(size);
    mouseOverAdd();
});

function generateGrid(size = 16){
    for (let i = 0; i < size; i++){
        let divRow = document.createElement("div");
        divRow.setAttribute("class", "divRow");
        container.appendChild(divRow);
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
        div.addEventListener('mouseover', (event)=>
            div.setAttribute("class", "divElementHover")
        )
    });
}


function removeGrid(){
    let divRows = document.querySelectorAll(".divRow")
    divRows.forEach((divRow) => {
        container.removeChild(divRow);
    });
}


