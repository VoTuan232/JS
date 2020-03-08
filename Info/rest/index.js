'use strict';

const x = {};

x['Monday'] = [{
    id: 1,
    name: 'vat'
}]

let y = {
    id: 2,
    name: 'hoa'
}

console.log(Array.isArray(x['Monday'])) // true
console.log(Array.isArray(...x['Monday'])) // faslse
console.log(...x['Monday'])
x['Monday'] = [...x['Monday'], y]
console.log(x)
