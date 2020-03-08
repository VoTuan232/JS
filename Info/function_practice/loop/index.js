'use strict'

// ARRAY: sử dụng for of
console.log('*********ARRAY LOOP***********')
var arr = [3, 5, 7];
arr['foo'] = "hello";
console.log('ARRAY LOOP use in')
for (var i in arr) {
    console.log(i); // logs "0", "1", "2", "foo"
}

console.log('ARRAY LOOP use of')
for (var i of arr) {
    console.log(i); // logs "3", "5", "7"
    // it is does not log "3", "5", "7", "hello"
}

// STRING: sử dụng for of
console.log('*********STRING LOOP*************')
let str = 'abcde';
console.log('STRING LOOP use of')
for (let char of str) {
    console.log(char.toUpperCase().repeat(3));
}
// console.log('STRING LOOP use in')
// for (let i in str) {
//     console.log(str[i].toUpperCase().repeat(3));
// }

// OBEJCT: sử dung for in
console.log('*********OBEJECT LOOP*************')
let oldCar = {
    make: 'Toyota',
    model: 'Tercel',
    year: '1996'
};

for (let key in oldCar) {
    console.log(`${key} --> ${oldCar[key]}`);
}
