"use strict";
const alert = require("alert-node");
const _ = require("lodash");

let x = {
  id: 1
  // user: {
  //   id: 2,
  //   name: "Vo tuan"
  // }
};

let y = {
  id: 1
};

y = x;

let clone = {};
for (let key in x) {
  clone[key] = x[key];
}
console.log(clone);

// y = null;

// let z = y.assign();

// x.id = 2;
console.log(x);
console.log(y);
console.log(x == y);
console.log(x === clone);
console.log(y === clone);
