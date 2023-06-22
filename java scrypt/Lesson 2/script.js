// let number = Number(prompt ("Enter any number from 1 to 10"));
// console.log(number + 4);
//console.log(Number("hello"));
//console.log(Boolean("vgg"));
//console.log(!!89);
//console.log(0||null||false);
//console.log(4 && 6 && "qwerty" && false && null);

//let first = Number(prompt("Enter one number"));
//let second = Number(prompt("Enter another number"));
//alert (first + second);
//alert (first - second);
//alert (first * second);
//alert (first / second) 

/*
// let number = Number(prompt("Введіть будь-яке число"));
// if (number > 0) {
//   //   alert("Число " + number + " більше за 0!");
//   alert(`Число ${number} більше за 0!`);
// } else if (number === 0) {
//   alert("Ви ввели 0");
// } else {
//   //   alert("Число " + number + " менше за 0!");
//   alert(`Число ${number} менше за 0!`);
// }

switch (userDrink) {
    case 1:
      alert("Ви вибрали каву!");
      break;
    case 2:
      alert("Ви вибрали чай!");
      break;
    case 3:
      alert("Ви вибрали мілкшейк!");
      break;
    default:
      alert("Такого напою не існує!");
      */

let number1 = Number(prompt("Введіть перше число"));
let number2 = Number(prompt("Введіть перше число"));
let index = (prompt("Виберіть математичну операцію"))
switch (index) {
    case "+":
        alert (number1+number2);
        break;
    case "-":
            alert(number1-number2);
            break;
    case "*":
            alert(number1*number2);
            break;
    case "/":
            alert(number1/number2);
            break;
    default:
        alert ("Такого оператора не існує")}