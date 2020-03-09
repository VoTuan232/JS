"use strict";

let arr = ["Ilya", "Kantor"];

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

console.log(firstName);
console.log(arr);
arr[0] = "11";
console.log(arr);
console.log(firstName);
