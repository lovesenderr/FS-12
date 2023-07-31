
const cars = ["BMW", "Infinity", "Honda"];

console.log (cars);
cars[2]="Toyota";
console.log (cars[2]);
console.log(cars.length);
console.log(cars[cars.length-1]);

for(let i=0; i < cars.length; i+=1){
    console.log(i, cars[i])
}
cars.push("Smart");
console.log(cars);

cars.pop();
console.log(cars);

cars.unshift("Audi", "Citroen");
console.log("unshift", cars);

cars.shift();
console.log(cars);

console.log(cars.indexOf("BMW"));
console.log(cars.includes("Bugatti"));

let string = "Alex";
const stringArr = string.split("");
console.log (stringArr);

let sentence = "I love Javascript !";
const wordsArr = sentence.split(" ");
wordsArr.pop();
console.log (wordsArr);

let newSentence=wordsArr.join(" ");
console.log(newSentence);

const fruits = ["Banana", "Apple", "Pineapple", "Watermelon"];
const fruitsCopy = fruits.slice(-2);
console.log(fruitsCopy);

const vegetables = ["Tomato", "Cucumber", "Potato", "Beetroot"];
const deletedVegetables = vegetables.splice(1, 2);
console.log("vegetables", vegetables);
console.log("deletedVegetables", deletedVegetables);

vegetables.splice(1, 0, "Onion"); 
console.log("vegetables", vegetables);

vegetables.splice(0, 1, "Cucumber");
console.log("заміна vegetables", vegetables);

// є масив елементів, потрібно видалити конкретний елемент з масиву

const students = ["Alex", "Oleg", "Vika", "Nastya", "Petro", "Olya"];
const studentName = "Nastya";

console.log("Students: ", students);
console.log("Delete: ", studentName);

const index = students.indexOf(studentName);

if (index !== -1) {
  students.splice(index, 1);
  console.log("Students: ", students);
} else {
  console.log(`Student ${studentName} doesn't exist!`);
}



