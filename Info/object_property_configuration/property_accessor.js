// Link : https://javascript.info/property-accessors

'use strict';

let user = {
  name: "John",
  surname: "Smith",

  // get ko phải là 1 function
  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};

console.log(user.fullName); // John Smith

// user.fullName = "Test"; // Error (property has only a getter)

// set fullName is executed with the given value.
user.fullName = "Alice Cooper";

console.log(user.fullName);

Object.defineProperty(user, 'fullName2', {
  get() {
    return `${this.name} ${this.surname} changed`;
  },

  set(value) {
    [this.name, this.surname] = value.split(" ");
  }
});

console.log(user.fullName2); // John Smith

for (let key in user) console.log(key); // name, surname