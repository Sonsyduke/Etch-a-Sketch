// Selecting the HTML elements
let gridDisplaySize = document.querySelector("#gridDisplaySize");
let gridSize = document.querySelector("#gridSize");

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
    square.classList.add("square");
    grid.append(square);
  }
}

function changeGridSize(size) {
  createGrid(size);
}
