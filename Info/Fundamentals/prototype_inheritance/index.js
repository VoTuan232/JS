let animal = {
  eats: true,
  name: 'Name here',

  walk() {
    /* this method won't be used by rabbit */
  },

  set fullName(value) {
    console.log('this')
    console.log(this) // rabbit
    this.name = value;
  },

  get fullName() {
    return `Name: ${this.name}`;
  },

  sleep() {
    this.isSleeping = true;
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

rabbit.sleep();
console.log('********All protperty of rabbit********')
for (let i in rabbit) {
  console.log(i) // jumbs, walk, eat, fullName,...
}
console.log('********All protperty of animal********')
for (let i in animal) {
  console.log(i) // jumbs, walk, eat, fullName
}
console.log('********Own protperty of rabbit********')
for (let i of Object.keys(rabbit)) {
  console.log(i)
}

console.log('********Check Own protperty of rabbit********')
for (let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);

  if (isOwn) {
    console.log(`Our: ${prop}`); // Our: jumps
  } else {
    console.log(`Inherited: ${prop}`); // Inherited: eats
  }
}
console.log('*****Check proto*******')
console.log(rabbit.__proto__);
console.log(animal.__proto__);