'use strict';

// let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);

let user = {
  name: "John"
};
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

console.log(JSON.stringify(descriptor, null, 2)); // true all

Object.defineProperty(user, "name", {
  value: "John1",
  writable: true,
  enumerable: false,
  configurable: true,
}); // nếu flag ko tồn tại => false
console.log(Object.getOwnPropertyDescriptor(user, 'name'));
console.log(user);

// case 2
let user1 = {};

Object.defineProperty(user1, "name", {
  value: "John",
  writable: false
});

let descriptor1 = Object.getOwnPropertyDescriptor(user1, 'name');

console.log(JSON.stringify(descriptor1, null, 2)); // false all


// case 3
let user2 = {
  name: "John"
};

Object.defineProperty(user2, "name", {
  writable: false
});

user2.name = "Pete"; // Error: Cannot assign to read only property 'name'