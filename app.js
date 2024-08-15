const gridContainer = document.querySelector(".grid-container");
const square = document.createElement("div");

function createGrid(size) {
  for (i = 0; i < size ** 2; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${640 / size}px`;
    square.style.height = `${640 / size}px`;
    gridContainer.appendChild(square);
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "grey";
    })
  }
}