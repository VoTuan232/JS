"use strict";

// animal has methods
let animal = {
  walk() {
    if (!this.isSleeping) {
      console.log(`I walk`);
    }
  },
  sleep() {
    this.isSleeping = true;
  }
};

let rabbit = {
  name: "White Rabbit",
  __proto__: animal
};
// console.log(rabbit);
// modifies rabbit.isSleeping
rabbit.sleep(); // (this ở trong sleep sẽ là rabbit)
// console.log(rabbit);

console.log(rabbit.isSleeping); // true
// animal.sleep();
// animal.walk();
console.log(animal.isSleeping); // undefined (no such property in the prototype)
