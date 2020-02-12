"use strict";
const alert = require('alert-node');

let s1 = 'S\u0307\u0323'; // Ṩ, S + dot above + dot below
let s2 = 'S\u0307\u0323'; // Ṩ, S + dot below + dot above

console.log( `s1: ${s1}, s2: ${s2}` );

console.log('S\u0307\u0323'); // false though the characters look identical (?!)
console.log('\u1e68'); // false though the characters look identical (?!)