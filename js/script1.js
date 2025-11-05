"use strict";

function changeColor() {
  const textElement = document.getElementById("text");
  const buttons = [
    { id: "red", color: "red" },
    { id: "green", color: "green" },
    { id: "blue", color: "blue" }
  ];

  if (!textElement) {
    console.error("Text is missing");
    return; 
  }

  buttons.forEach(({ id, color }) => {
    const button = document.getElementById(id);
    
    if (!button) {
      console.warn(`Button with id "${id}" not found`);
      return;
    }
    
    button.addEventListener("click", () => {
      textElement.style.color = color;
    });
  });
}
changeColor()