'use strict';

let user = {
  id: 1,
  name: 'VAT',
}

Object.assign(user, {
  age: 24
});

let clone1 = Object.assign(user, {
  size: 1
}); // gán size tới user, sau đó : clone1 = user;
let clone2 = Object.assign({}, user);

console.log(user);
console.log(clone1);
console.log(clone2);
console.log(clone1 === user); // true
console.log(clone2 === user); // false