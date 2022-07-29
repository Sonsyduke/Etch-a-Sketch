// Selecting the HTML elements
let gridDisplaySize = document.querySelector("#gridDisplaySize");
let gridSize = document.querySelector("#gridSize");
const resetBtn = document.querySelector("#reset");
const blackBtn = document.querySelector("#black");
const randomBtn = document.querySelector("#random");
const colorPicker = document.querySelector("#colorPicker");
const esarerBtn = document.querySelector("#eraser");
const colorVariable = "--mainColor";

createGrid(16);

// Changing the value display of the grid
gridSize.addEventListener("change", function () {
  gridDisplaySize.textContent = `${gridSize.value} x ${gridSize.value}`;
  createGrid(gridSize.value);
});

// Creating a grid of 16x16

function createGrid(size) {
  let grid = document.querySelector(".grid");

  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  let amount = size * size;

  let squares = grid.querySelectorAll(".square");
  squares.forEach((div) => div.remove());
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", function () {
      square.classList.add("squareColor");
    });
    resetBtn.addEventListener("click", function () {
      square.classList.remove("squareColor");
    });
    blackBtn.addEventListener("click", function () {
      document.documentElement.style.setProperty(colorVariable, "black");
    });
    randomBtn.addEventListener("click", function () {
      document.documentElement.style.setProperty(colorVariable, randomColor());
    });
    colorPicker.addEventListener("change", function (e) {
      document.documentElement.style.setProperty(colorVariable, e.target.value);
    });
    square.classList.add("square");
    grid.append(square);
  }
}

// Changing the size of the board
function changeGridSize(size) {
  createGrid(size);
}

// Random color generator
function randomColor() {
  const red = Math.floor(Math.random() * 255) + 1;
  const green = Math.floor(Math.random() * 255) + 1;
  const blue = Math.floor(Math.random() * 255) + 1;
  let randomColor = `rgb(${red}, ${green}, ${blue})`;
  return randomColor;
}
