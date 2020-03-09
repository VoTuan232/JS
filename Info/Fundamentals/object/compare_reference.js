"use strict";
const alert = require('alert-node');
const _ = require('lodash');

let x = {
  id: 1,
  // user: {
  //   id: 2,
  //   name: 'Vo anh tuan',
  // }
}

let y = {
  id: 2,
}

y = x; // copy reference

let z = {};

for (let key in x) {
  z[key] = x[key];
}

// delete z.id;
// y.id = 2;


console.log(x);
console.log(y);
console.log(z);
console.log(y === x);
console.log(x == z); // false
// console.log({} == {}); // false