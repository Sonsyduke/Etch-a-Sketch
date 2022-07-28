// Selecting the HTML elements
let gridDisplaySize = document.querySelector("#gridDisplaySize");
let gridSize = document.querySelector("#gridSize");
const resetBtn = document.querySelector("#reset");
const blackBtn = document.querySelector("#black");
const randomBtn = document.querySelector("#random");

createGrid(16);

// resetBtn.addEventListener("click", function () {
//   console.log("Reset");
// });
// blackBtn.addEventListener("click", function () {
//   console.log("Black");
// });
// randomBtn.addEventListener("click", function () {
//   console.log("Random");
// });

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
      square.classList.add("blank");
    });
    resetBtn.addEventListener("click", function () {
      square.classList.remove("blank");
    });
    square.classList.add("square");
    grid.append(square);
  }
}

// Changing the size of the board
function changeGridSize(size) {
  createGrid(size);
}
