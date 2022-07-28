// Selecting the HTML elements
let gridDisplaySize = document.querySelector("#gridDisplaySize");
let gridSize = document.querySelector("#gridSize");
let grid = document.querySelector(".grid");

// Changing the value display of the grid
gridSize.addEventListener("change", function () {
  gridDisplaySize.textContent = `${gridSize.value} x ${gridSize.value}`;
});

// Creating a grid of 16x16
createGrid();

function createGrid() {
  grid.style.gridTemplateColumns = "repeat(16, 1fr)";
  grid.style.gridTemplateRows = "repeat(16, 1fr)";

  for (let i = 0; i < 256; i++) {
    let square = document.createElement("div");
    // square.style.backgroundColor = "black";
    square.classList.add("square");
    grid.append(square);
  }
}
