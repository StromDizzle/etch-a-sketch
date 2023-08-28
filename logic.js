const container = document.querySelector(".container");

createBoxArray(64, 64);
addListeners();


//returns node containing box element
function createBox(){
    const box = document.createElement('div');
    box.classList.add('box');
    return box;
}

//take row and column values and create a grid of buttons on the page
function createBoxArray(r, c){

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



