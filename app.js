const gridContainer = document.querySelector(".grid-container");
const square = document.createElement("div");
const sizeButton = document.querySelector(".grid-size-button");


function createGrid(size) {
  for (i = 0; i < size ** 2; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${640 / size}px`;
    square.style.height = `${640 / size}px`;
    gridContainer.appendChild(square);
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "grey";
    });
  }
}

createGrid(16);

function clearGrid(){
  gridContainer.innerHTML = ''
}

function gridSize() {
  let size = Number(
    prompt("What size should your grid be? Maximum size is 100")
  );
  if (size < 1 || size > 100) {
    alert("The number must be between 1 and 100");
    size = Number(prompt("Choose your grid size betweewn 1 and 100"));
  }
  clearGrid()
  createGrid(size)
}

