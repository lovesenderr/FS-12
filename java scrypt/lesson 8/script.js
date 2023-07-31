/* function calculateFuelConsumption(consumption, distance) {
    return((distance * consumption) / 100);
  }
  
  console.log(calculateFuelConsumption(15, 600));
*/

const car = {
    brand: "BMW",
    model: "330i",
    volume: 2.0,
    hp: 500,
    consumption: 15,
    calculateFuelConsumption(distance) {
      const consumption = (distance * this.consumption) / 100;
      console.log(
        `The car ${this.brand} ${this.model} will consume ${consumption} liters of gasoline per ${distance} kiliometers`
      );
      return consumption;
    },
  };
  
  car.calculateFuelConsumption(3479);
  const car1 = {
    brand: "Infinity",
    model: "Q60s",
    volume: 3.0,
    hp: 550,
    consumption: 17,
    calculateFuelConsumption: car.calculateFuelConsumption,
  };
  
  car1.calculateFuelConsumption(678);
  car1.calculateFuelConsumption(10000);



  //написати метод для каменю, який буде рахувати загальну вартість всіх каменів на складі і виводити повідомлення такого вигляду: На скаді лишилось 4 каменя Смарагд загальною вартістю 5200.

/* const stone = { 
    name: "Смарагд", 
    price: 1300, 
    quantity: 4,
    calcTotalValue(){
        const totalValue = (this.quantity * this.price);
        console.log (`На складі лишилось ${this.quantity} каменя ${this.name} загальною вартістю ${totalValue}`);
        return totalValue;
    },
};

stone.calcTotalValue();
*/
// Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок з назвою каменю. Функція рахує і повертає 
//загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта

const stones = [
    { name: "Смарагд", price: 1300, quantity: 4 },
    { name: "Діамант", price: 2700, quantity: 3 },
    { name: "Сапфір", price: 400, quantity: 7 },
    { name: "Щебінь", price: 200, quantity: 2 },
  ];
  
  
  function calcTotalValue(stones, stoneName){

for (let i=0; i<stones.length; i+=1){
    const stone = stones[i]
    if (stone.name=== stoneName){
        return stone.price * stone.quantity;
    }
}
}
 console.log (calcTotalValue(stones, "Смарагд"))
