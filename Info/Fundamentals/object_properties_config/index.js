let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    if (value.split(" ").length !== 2) {
      return;
    }
    [this.name, this.surname] = value.split(" ");
  }
};

// Object.defineProperty(user, 'fullName', {
//   get() {
//     return `${this.name} ${this.surname}`;
//   },

//   set(value) {
//     [this.name, this.surname] = value.split(" ");
//   }
// });

console.log(user)
// set fullName is executed with the given value.
user.fullName = "Alice Cooper";

console.log(user.name); // Alice
console.log(user.surname); // Cooper

console.log('******properties*******')
for (let key in user) console.log(key); // name, surname