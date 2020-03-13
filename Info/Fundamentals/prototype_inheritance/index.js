let animal = {
  eats: true,
  name: 'Name here',

  set fullName(value) {
    console.log('this')
    console.log(this) // rabbit
    this.name = value;
  },

  get fullName() {
    return `Name: ${this.name}`;
  }
};
let rabbit = {
  jumps: true,
  __proto__: animal
};

// rabbit.__proto__ = animal; // (*)
rabbit.walk = function () {
  console.log('Rabbit walk');
}

// we can find both properties in rabbit now:
console.log('*********Prototype Inheritance**********')
console.log(rabbit.eats); // true (**)
console.log(rabbit.jumps); // true
rabbit.walk() // Rabbit walk

// change prototype (getter/setter)
console.log('******Change setter/getter of protptype********')
console.log(rabbit.fullName)
rabbit.fullName = 'Rabbit name changed'; // chỉ sửa giá trị của đối tượng con => đối tượng cha ko bị thay đổi => 
// perfect (khi có nhiều đối tượng con kế thừa, đối tượng cha cũng ko bị thay đổi)
console.log(rabbit.fullName)
console.log('Animal name:')
console.log(animal.fullName)

console.log('********All protperty of rabbit********')
for (let i in rabbit) {
  console.log(i) // jumbs, walk, eat, fullName
}