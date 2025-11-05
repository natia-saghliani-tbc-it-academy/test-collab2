let currentInput = "";
const inputElement = document.querySelector("#task-input");
const todoContentElement = document.querySelector(".todo-content");

function addTheTask() {
    currentInput = inputElement.value.trim();
    if(currentInput.length === 0) {
        return
    }
    
  try {
    let todoElement = document.createElement("div");

    todoElement.innerText = currentInput;
    todoElement.classList.add("todo-item");

    todoElement.addEventListener('click', () => {
        todoElement.classList.toggle('completed');
    })

    todoContentElement.appendChild(todoElement);
  } catch (err) {
    console.log(err.message);
  } finally {
    clearInput();
  }
}

function clearInput() {
  inputElement.value = "";
}


function clearInputs() {
    todoContentElement.replaceChildren();
}