"use strict";

/*
Object.keys(obj) – returns an array of keys.
Object.values(obj) – returns an array of values.
Object.entries(obj) – returns an array of [key, value] pairs.
*/

let user = {
  name: "John",
  age: 30
};

// loop over values
for (let value of Object.values(user)) {
  console.log(value); // John, then 30
}

for (let key of Object.keys(user)) {
  console.log(key); // name, then age
}

for (let [key, value] of Object.entries(user)) {
  console.log([key, value]); // [ 'name', 'John' ] then [ 'age', 30 ]
}
