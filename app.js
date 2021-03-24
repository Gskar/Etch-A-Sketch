//Query Selectors
const container = document.querySelector(".container");
const blackbtn = document.querySelector("#blackbtn");
const rainbowbtn = document.querySelector("#rainbowbtn");
const resize = document.querySelector("#resize");
const clearAll = document.querySelector("#clear");
const userChoice = document.querySelector("#userchoice");

//OnloadDefaultGrid
document.addEventListener("load", createGrid(12));
document.addEventListener("load", setColor("rainbow"));

//GridCreation
function createGrid(size) {
  for (let i = 1; i <= size * size; i++) {
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    const box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);
    box.addEventListener("mouseover", randomColor);
  }
}

//RandomColorFunction
function randomColor(e) {
  const randomR = Math.floor(Math.random() * 255);
  const randomG = Math.floor(Math.random() * 255);
  const randomB = Math.floor(Math.random() * 255);
  let random = `rgb(${randomR}, ${randomG}, ${randomB})`;
  return random;
}

//ResizeFunction
function resizeInput() {
  let userInput = prompt(`Type Your Number(1-64)`);
  if (userInput > 64 || userInput < 0) {
    resizeInput();
  } else {
    container.innerHTML = "";
    createGrid(userInput);
    setColor("rainbow");
  }
}

//ClearAllFunction
function clear() {
  let gridClear = container.querySelectorAll("div");
  gridClear.forEach((div) => {
    div.style.backgroundColor = `white`;
  });
}

//UserColorInput
function userPick() {
  let color = document.querySelector("#userchoice").value;
  return color;
}

//Eraser
eraser = (e) => {
  e.target.style.backgroundColor = "white";
};

//ColorPicker
function setColor(color) {
  const divs = container.querySelectorAll("div");
  for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener("mouseover", (e) => {
      if (color === "black") {
        e.target.style.backgroundColor = `black`;
      } else if (color === "rainbow") {
        e.target.style.backgroundColor = randomColor();
      } else if (color === "user") {
        e.target.style.backgroundColor = userPick();
      }
      divs[i].addEventListener("click", eraser);
      divs[i].addEventListener("dragenter", eraser);
      divs[i].addEventListener("dragover", eraser);
    });
  }
}

//Event Listeners
resize.addEventListener("click", resizeInput);
clearAll.addEventListener("click", clear);

blackbtn.addEventListener("click", () => {
  let color = "black";
  setColor(color);
});

rainbowbtn.addEventListener("click", () => {
  let color = "rainbow";
  setColor(color);
});

userChoice.addEventListener("click", () => {
  let color = "user";
  setColor(color);
});
