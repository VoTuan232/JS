'use strict'

function increment(input) { return input + 1; }

function decrement(input) { return input + -1; }

function double(input) { return input * 2; }

function halve(input) { return input / 2; }

let pipeline = [increment, double, decrement];

const result = pipeline.reduce((total, func) => {
    return func(total);
}, 1);

console.log(result)