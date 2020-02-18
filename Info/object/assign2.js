'use strict';
const _ = require('lodash');

let user = {
  id: 1,
  name: 'VAT',
  info: {
    age: 24,
    single: true,
  }
}

// object sẽ được copy reference
let user2 = Object.assign({}, user);
user.id = 2;
user.info.age = 25; // sẽ update sang cả user2

console.log(user);
console.log(user2);
console.log(user2.info === user.info); // true
console.log(user2 == user); // false

var objects = {
  id: 1,
  name: 'VAT',
  info: {
    age: 24,
    single: true,
  }
}