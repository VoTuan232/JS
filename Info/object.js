"use strict";
const alert = require('alert-node');
const _ = require('lodash');

let x = {
  id: 1,
}

let y = {
  id: 2,
}

y = x;

let z = {};

for (let key in x) {
  z[key] = x[key];
}



console.log(x);
console.log(y);
console.log(z);
console.log(y == x);
console.log(x == z);