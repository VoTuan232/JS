'use strict';

const user = {
  id: 1,
}

console.log(user);

user.id = 2;

// user = {
//   id: 2
// } // ERROR

console.log(user);