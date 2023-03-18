const container = document.getElementById("container");

var color = "black";
const tiles = document.getElementsByClassName("grid-item");

function drawTile(){
  Array.from(tiles).forEach((tile) => {
    tile.addEventListener("mouseenter", (e) =>  
    e.target.style.backgroundColor = color)
  })
}

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";


    drawTile();

  };  
};
rows = 16;
cols = 16;
makeRows(16, 16);

const buttonClear = document.getElementById("clean-check")

const buttonColor = document.getElementById("color-check")

buttonColor.onclick = () =>{ color = prompt("Choose a color") 
drawTile();
}
buttonClear.onclick = () => { 
Array.from(tiles).forEach((tile) => {
  
  tile.style.backgroundColor = 'white'
});
}

const buttonEraser = document.getElementById("eraser")

buttonEraser.onclick = () => { color = 'white'
drawTile();
}


const buttonSize = document.getElementById("size-check");
buttonSize.onclick = () => {
  rows = prompt();
  cols = rows;
  container.innerHTML = '';
  makeRows(rows,cols);
  
 
}
const buttonSizeEight = document.getElementById("size-8");
buttonSizeEight.onclick = () => {
  
  container.innerHTML = '';
  makeRows(8,8);
  
 
}
const buttonSizeThirtyTwo = document.getElementById("size-32");
buttonSizeThirtyTwo.onclick = () => {
  
  container.innerHTML = '';
  makeRows(32,32);
 
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}



const buttonRgb = document.getElementById("buttonRgb");
buttonRgb.onclick = () => {
 
  Array.from(tiles).forEach((tile) => { 
    
    
    tile.addEventListener("mouseenter", (e) => 
    e.target.style.backgroundColor = `rgb(${random(0,255)},${random(0,255)},${random(0,255)})`)
  });
}