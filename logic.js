
main();

function main(){
    let sides = "";
    const standardButton = document.querySelector(".standard-button");
    standardButton.addEventListener('click', function (){
        replaceGrid("normal");
    })
    const colorRandomizerButton = document.querySelector(".color-randomizer-button");
    colorRandomizerButton.addEventListener('click', function (){
        replaceGrid("color-randomizer");
    })
    const darkenButton = document.querySelector(".darken-button");
    darkenButton.addEventListener('click', function (){
        replaceGrid("darken");
    })
    createBoxArray(16, 16, "normal");
}

//returns node containing box element
function createBox(){
    const box = document.createElement('div');
    box.classList.add('box');
    return box;
}

//take row and column values and create a grid of buttons on the page
function createBoxArray(r, c, mode){
    const container = document.querySelector(".grid-container");
    container.innerHTML = "";
    const box = createBox();
    const row = document.createElement('div');
    row.classList.add('row');

    //create a row of c boxes
    for (let i = 0; i < c; i++){
        newBox = box.cloneNode();
        row.appendChild(newBox);
    }

    //add row of boxes r times to container
   for (let j = 0; j < r; j++){
        newRow = row.cloneNode(true);
        container.appendChild(newRow);
   }
   addBoxListeners(mode);
}

function addBoxListeners(mode){
    let allBoxes = document.querySelectorAll('.box');
    switch (mode) {
        case "normal":
            allBoxes.forEach(currentBox => {
                currentBox.addEventListener('mouseover', () => changeColor(currentBox))
            });
            break;
        case "color-randomizer":
            allBoxes.forEach(currentBox => {
                currentBox.addEventListener('mouseover', () => randomizeColor(currentBox))
            });
            break;
        case "darken":
            allBoxes.forEach(currentBox => {
                currentBox.style.backgroundColor = "rgb(0, 0, 0, 0)";
                currentBox.addEventListener('mouseover', () => darkenColor(currentBox))
            });
            break;
    }

}

function changeColor(currBox){
    currBox.classList.add('color-change');
}

function randomizeColor(currBox){
    console.log("color random function start");
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
    currBox.style.backgroundColor = `rgb(${r},${g},${b})`;
}

function darkenColor(currBox){
    let currentOpacity = Number(currBox.style.opacity);
    if (currentOpacity < 1){
        currBox.style.backgroundColor = `rgb(0, 0, 0, ${currentOpacity + 0.1})`
        currBox.style.opacity = currentOpacity + 0.1;
    }
}

function replaceGrid(mode){
    sides = prompt("Enter number of squares per side: ");
    const grid = document.querySelector(".grid-container");
    testSides = Number(sides);
    if (isNaN(testSides)){
        alert("Input must be a number!");
        replaceGrid();
    }
    
    if (testSides <= 0 || testSides > 100){
        alert("Input must be from 1-100");
        replaceGrid();
    }
    //check for odd number of boxes, if so, set width to 899 to remove dead pixel on the right
    if (testSides % 2 === 1){
        grid.style.width = '899px';
    }
    else grid.style.width = '900px';
    createBoxArray(sides, sides, mode);
}







