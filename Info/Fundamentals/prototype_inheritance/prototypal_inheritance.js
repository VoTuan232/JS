"use strict";

let animal = {
  eats: true,
  walker: () => {
    console.log("walker");
  },
  talk() {
    /* this method won't be used by rabbit */
    console.log("Animal talk");
  }
};
let rabbit = {
  jumps: true,
  __proto__: animal
};

let longEar = {
  earLength: 10,
  // eats: false,
  __proto__: rabbit
};

// rabbit.__proto__ = animal;

console.log(rabbit);
console.log(rabbit.jumps);
console.log(rabbit.eats); // nếu thuộc tính ko có trong rabbit sẽ đc lấy từ animal (follow reference)
rabbit.walker();

console.log(longEar.eats);

rabbit.talk = () => {
  console.log("Rabbit talk");
};

rabbit.talk();
