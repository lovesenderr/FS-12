/*
for (let i=1; i<=10; i +=1) {
    console.log(i) 
}
 
 let count=0;
for (let i = 2; i <= 100; i += 2) {
console.log(i)
}
count +=1;
console.log("Ітерацій: ${count}")
*/

// while - виконується до тих пір поки умова буде true (часто використовується тоді, коли ми не знаємо кількість ітерацій)

// while (умова) { тіло циклу - буде виконуватись тоді, коли умова буде true, якщо умова буде false - цикл завершується }

/*let word = "карусель";

let userWord = prompt("Я загадав слово! Спробуй його вгадати: ");

while (word !== userWord) {
  userWord = prompt("Невірно! Спробуй ще раз: ");
}

alert("Ти вгадав, вітаю!");

 запитати у користувача його нікнейм. Якщо він ввів будь-який текст - то просто привітатись(Привіт, юзернейм). Але Якщо він ввів 
слово admin - то заптати пароль. Якщо він ввів пароль admin - то сказати: Ви увійшли в систему. Якщо ж пароль невірний - то питати 
до тих пір, поки не напише правильний.
*/
let username = "admin";
let nickname = prompt("Введіть свій нікнейм");
if (nickname !== username) {
  alert(`Привіт, ${nickname}`);
} else {
  let password = "admin";
  let truepassword = prompt("Введіть пароль");
  while (truepassword !== password) {
    truepassword = prompt("Спробуйте ще раз");
  }
  alert("Ви увійшли в систему");
}
