/*const text = document.getElementById("text");

console.log(text);

text.textContent = "Цей текст було написано через JS";
// text.style.color = "green";

text.classList.remove("text1")
text.classList.add("main-text")
console.log(text.classList)
*/

/*
const btn = document.getElementById("btn");

btn.addEventListener("click", onClick);

function onClick() {
  alert("Ви натиснули!");
}
*/

/*
const btn = document.getElementById("btn");
const textContainer = document.getElementById("textContainer");

btn.addEventListener("click", onClick);

function onClick() {
  const pEl = document.createElement("p");
  pEl.textContent = "Ви натиснули!";
  textContainer.appendChild(pEl);
}
*/

/*
let results = 0;
const dec = document.getElementById("decrement");
decrement.addEventListener("click", minClick);

const result = document.getElementById("result");

const inc = document.getElementById("increment");
increment.addEventListener("click", plusClick);

function plusClick(){
    results += 1
    result.textContent = results }

function minClick() {
     results -= 1
     result.textContent = results
    }
    */

const refs = {
  decrement: document.getElementById("decrement"),
  result: document.getElementById("result"),
  increment: document.getElementById("increment"),
};

const result = {
  value: Number(refs.result.textContent),
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
  updateNumber() {
    refs.result.textContent = this.value;
  },
};

console.log(result);
refs.increment.addEventListener("click", increment);
refs.decrement.addEventListener("click", decrement);

function increment() {
  result.increment();
  result.updateNumber();
}
function decrement() {
  result.decrement();
  result.updateNumber();
}
