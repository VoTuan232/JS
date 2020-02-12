"use strict";
const http = require('http');
const express = require('express');
const app = express();
const _ = require('lodash');

app.listen(3000);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

let initialValue = 0
let sum = [{
  x: 1
}, {
  x: 2
}, {
  x: 3
}].reduce(function (accumulator, currentValue) {
  return accumulator + currentValue.x
}, initialValue)

console.log(sum) // logs 6