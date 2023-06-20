let input = document.getElementById("input");
const screen = document.getElementById("screen");

let cars = [];

function display() {
  screen.innerText = "";
  for (x = 0; x < cars.length; x++) 
  screen.innerHTML += `<div id='style'  class="todo">
  ${cars[x]}
  <button id='delbtn'>Delete</button>
  </div>`;
}

const todos = document.getElementsByClassName("todo");
console.log(todos);

// const todos2 = screen.getElementsByTagName("div")
// console.log("todos2");

// Convert the collection into an array
const todoArray = Array.from(todos)
console.log(todoArray)
todoArray.forEach(item => {
  const delbtn = item.getElementById("delbtn")
  delbtn.addEventListener("click", () =>{
    item.style.display = "none";
    console.log("button clicked")
  })
});

function push() {
  cars.push(input.value + " ");
  display();
}

function pop() {
  cars.pop();
  display();
}

function shift() {
  cars.shift();
  display();
}

function unshift() {
  cars.unshift(input.value + " ");
  display();
}
