let animal = {
  eats: true
};

function Rabbit(name) {
  this.name = name;
} // Constructor function
console.log(animal)
console.log(Rabbit)

console.log(Rabbit.prototype); // {constructor:Rabbit} => Mặc định Rabbit luôn có thuộc tính constructor chính bằng Rabbit
console.log(Rabbit.prototype.constructor === Rabbit); // true

// Rabbit.prototype = animal; // gán prototype object cho Rabbit  
// Giữ constructor object mặc định
Rabbit.prototype.jumps = true;
// Hoặc
// Rabbit.prototype = {
//   jumps: true,
//   constructor: Rabbit
// }; // repeat constructor

// Rabbit.prototype = {
//   jumps: true
// }; // constructor mặc định bị xóa

console.log(Rabbit.prototype); // animal
console.log(Rabbit.prototype.constructor === Rabbit); // false

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal // Mặc định rabbit luôn có __proto__ là object {constructor: Rabbit}
// Mặc định rabbit có thuộc tính constructor kế thừa từ Rabbit
console.log(rabbit);
// console.log(rabbit.eats); // true

let rabbit2 = new rabbit.constructor("Black Rabbit"); // theo mặc định
console.log(rabbit2)



