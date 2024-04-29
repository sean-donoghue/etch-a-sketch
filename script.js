const newGridBtn = document.querySelector(".new-grid-btn");
const container = document.querySelector(".container");

const DEFAULT_GRID_SIZE = 16;

function getGridSize() {
  let gridSize = null;

  do {
    gridSize = parseInt(prompt("Enter a new grid size (1-100):"));
  } while (!isValidGridSize(gridSize));

  return gridSize;
}

function isValidGridSize(value) {
  return Number.isInteger(value) && value >= 1 && value <= 100;
}

function createBox(gridSize) {
  const box = document.createElement("div");
  box.classList.add("box");
  box.style.width = `${100 / gridSize}%`;

  box.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "black";
  });

  return box;
}

function newGrid(gridSize) {
  container.replaceChildren();

  for (let i = 0; i < gridSize ** 2; i++) {
    container.appendChild(createBox(gridSize));
  }
}

newGridBtn.addEventListener("click", () => newGrid(getGridSize()));

newGrid(DEFAULT_GRID_SIZE);
