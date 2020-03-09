"use strict";
const _ = require("lodash");

let user = {
  id: 1,
  name: "VAT",
  info: {
    age: 24,
    single: true
  }
};

// object sẽ được copy reference
let cloneUser = Object.assign({}, user);
console.log(cloneUser === user); /* False */
console.log(cloneUser.info === user.info); /* True */
user.id = 2;
console.log(user); /* { id: 2, name: 'VAT', info: { age: 24, single: true } } */
console.log(
  cloneUser
); /* { id: 1, name: 'VAT', info: { age: 24, single: true } } */

user.info.age = 25; // sẽ update sang cả cloneUser
console.log(user); /* { id: 2, name: 'VAT', info: { age: 25, single: true } } */
console.log(
  cloneUser
); /* { id: 1, name: 'VAT', info: { age: 25, single: true } } */

var objects = {
  id: 1,
  name: "VAT",
  info: {
    age: 24,
    single: true
  }
};
