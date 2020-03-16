class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}

let animal = new Animal("My animal");
console.log("Animal: ");
// console.log(Animal);
console.log(animal);

class Rabbit extends Animal {
  // constructor(...args) {
  //   super(...args);
  // } // default

  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }

  hide() {
    console.log(`${this.name} hides!`);
  }

  stop() {
    // console.log(this);
    // console.log("run stop rabbit");
    // console.log(this.__proto__);
    // this.__proto__.stop();
    // this.__proto__.stop();
    setTimeout(() => {
      // console.log(this);
      super.stop();
    }, 1000); // call parent stop after 1sec
  }
}

let rabbit = new Rabbit("White Rabbit");

console.log("Rabbit: ");
console.log(rabbit);
rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.hide(); // White Rabbit hides!
console.log("Rabbit stop: ");
rabbit.stop();

console.log("*********property of rabbit**********");
for (let i in rabbit) {
  console.log(i);
}
