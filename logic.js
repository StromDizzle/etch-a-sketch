
main();

function main(){
    let sides = "";
    const button = document.querySelector("button")
    console.log(button);
    button.addEventListener('click', function (){
        replaceGrid();
    })
    createBoxArray(16, 16);
}

//returns node containing box element
function createBox(){
    const box = document.createElement('div');
    box.classList.add('box');
    return box;
}

//take row and column values and create a grid of buttons on the page
function createBoxArray(r, c){
    const container = document.querySelector(".grid-container");
    container.innerHTML = "";
    const box = createBox();
    const row = document.createElement('div');
    row.classList.add('row');

    //create a row of c boxes
    for (let i = 0; i < c; i++){
        newBox = box.cloneNode();
        //newBox.classList.add(`column-${i}`);
        row.appendChild(newBox);
    }

    //add row of boxes r times to container
   for (let j = 0; j < r; j++){
        newRow = row.cloneNode(true);
        //newRow.classList.add(`row-${j}`);
        container.appendChild(newRow);
   }
   addListeners();
}

function addListeners(){
    let allBoxes = document.querySelectorAll('.box');
    allBoxes.forEach(currentBox => {
        currentBox.addEventListener('mouseover', () => changeColor(currentBox))
    });    
}

function changeColor(currBox){
    currBox.classList.add('color-change');
}

function replaceGrid(){
    sides = prompt("Enter number of squares per side: ");
    console.log("yes")
    testSides = Number(sides);
    if (isNaN(testSides)){
        alert("Input must be a number!");
        replaceGrid();
    }
    
    if (testSides <= 0 || testSides > 100){
        alert("Input must be from 1-100");
        replaceGrid();
    }
    createBoxArray(sides, sides);
}







