/* function logMsg (){
    console.log ("Hello world!");
}
*/

function minNum(a, b) {
  if (a < b) {
    console.log(a);
  } else {
    console.log(b);
  }
}
minNum(2, 5);
minNum(3, -1);
minNum(1, 1);

function min(a, b) {
  console.log(Math.min(a, b));
}
min(2, 5);
min(3, -1);
min(1, 1);

// Напиши функцію min(a,b), яка повертає найменше з чисел a та b.

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
  //   return Math.min(a, b);
}

console.log(min(2, 5)); // 2
console.log(min(3, -1)); // -1
console.log(min(1, 1)); // 1

let sumOfMin = min(-9, 4) + min(2, 10); // -9 + 2 -> -7

console.log(sumOfMin);


function checkNumber(min, max, number) {
  if (min<=number && number<=max) {
    return true;
  } else {
    return false;
  }
}
console.log(checkNumber (1, 100, -5));
console.log(checkNumber (5, 15, 8));

function checkNumber(min, max, number) {
   
  
    return number >= min && number <= max;
  }
  
  console.log(checkNumber(1, 100, 50));
  console.log(checkNumber(-100, 100, -101));

// напиати функцію calculateSquare(a, b), a та b - сторони прямокутника. Функція повинна повернути площу цього прямокутника

function calcSquare (a, b){
    return a*b
}
console.log(calcSquare(4, 5));
console.log(calcSquare(7, 3));