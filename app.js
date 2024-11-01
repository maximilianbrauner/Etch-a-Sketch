const gridContainer = document.querySelector(".grid-container");
const square = document.createElement("div");
const sizeButton = document.querySelector(".grid-size-button");


//logic for drawing on click
mouseDown = false
gridContainer.addEventListener("mousedown", () => {mouseDown = true} )
gridContainer.addEventListener("mouseup", () => (mouseDown = false))


function createGrid(size) {
  for (i = 0; i < size ** 2; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${640 / size}px`;
    square.style.height = `${640 / size}px`;
    gridContainer.appendChild(square);
    square.addEventListener("mouseover", () => {
      if(mouseDown){
      square.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
    }});
    square.addEventListener("click", () => {
      square.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
    });
  }
}

createGrid(16);

function clearGrid(){
  gridContainer.replaceChildren()
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
