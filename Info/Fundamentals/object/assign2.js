"use strict";

let user = {
  id: 1,
  name: "VAT",
  info: {
    age: 24,
    single: true
  }
};

// object sẽ được copy reference
// let cloneUser = {}
// for (let i in user) {
//   cloneUser[i] = user[i]
// }
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
