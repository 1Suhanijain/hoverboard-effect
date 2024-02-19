const container = document.getElementById("container");
const colors = ["blue", "red", "green", "yellow"];
const SQUARES = 500;

for (let i = 0; i <= SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  container.appendChild(square);
  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));
}

function setColor(elem) {
  const color = getRandomColor();
  elem.style.background = color;
  elem.style.boxShadow = `0 0 2px ${color} 0 0 10px ${color}`;
}
function removeColor(elem) {
  elem.style.background = "#1d1d1d";
  elem.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
