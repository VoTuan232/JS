"use strict";

let user = {
  id: 1,
  name: "VAT"
};

Object.assign(user, {
  age: 24
});
console.log(user);
/*
{
  id: 1,
  name: 'VAT',
  age: 24
}
*/
let copyRef = Object.assign(user, {
  size: 1
}); // gán size tới user, sau đó : clone1 = user;
console.log(copyRef === user);
/* True */
user.age = "changed";
console.log(user);
/* { id: 1, name: 'VAT', age: 'changed', size: 1 } */
console.log(copyRef);
/* { id: 1, name: 'VAT', age: 'changed', size: 1 } */

let clone = Object.assign({}, user);
console.log(clone === copyRef); // False
console.log(clone === user); // False
