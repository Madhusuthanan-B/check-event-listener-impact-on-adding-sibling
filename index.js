// Import stylesheets
import "./style.css";

// Write Javascript code!

const rootEl = document.getElementById("root");
const addBtn = document.getElementById("add");

const largeLabel = document.createElement("div");
largeLabel.className = "label";
largeLabel.id = "large";
rootEl.appendChild(largeLabel);

const large = document.getElementById("large");
large.addEventListener("mousemove", () => {
  console.log("Large mouse move");
});

addBtn.addEventListener("click", () => {
  const newLabelElement = document.createElement("div");
  newLabelElement.className = "newLabel";
  newLabelElement.id = "newLabel";
  rootEl.appendChild(newLabelElement);

  const newLabel = document.getElementById("newLabel");
  newLabel.addEventListener("mousemove", () => {
    console.log("small label mouse move");
  });
});
