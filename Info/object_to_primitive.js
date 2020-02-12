"use strict";
const http = require('http');
const express = require('express');
const app = express();
const _ = require('lodash');

app.listen(3000);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

let user = {
  name: "John",
  money: 1000,

  // for hint="string"
  toString() {
    return `nameChange: ${this.name}`;
  },

  // for hint="number" or "default"
  valueOf() {
    return `${this.money}`;
  }

};

console.log(user); // toString -> {name: "John"}
console.log(+user); // valueOf -> 1000
console.log(user + 500); // valueOf -> 1500