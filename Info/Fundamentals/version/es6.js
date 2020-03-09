"use strict";

let defaultParameter = (width = 100, height = 200) => {
  return `Default Parameter: \n\twidth is: ${width}, \n\theight is: ${height}`;
};

console.log(defaultParameter());

let templateLiteral = variable => {
  return `Template literal: \n\tshow variables: ${variable}`;
};

console.log(templateLiteral("value here"));

let multiLineString = () => {
  return `Multi line string: 
  Line 1
  Line 2
  `;
};

console.log(multiLineString());

// let destructorAssignment = () => {
//   const v1 = {
//     username: "Vo Anh Tuan",
//     password: "matkhau"
//   };
//   const { username, password } = v1;
//   console.log("Destructor assignment:");
//   console.log(username);
//   console.log(password);
// };

// destructorAssignment();

// var logUpperCase = function() {
//   this.string = this.string.toUpperCase();
//   return () => console.log(this.string);
// };

// logUpperCase.call({ string: "es6 rocks" })();

let promise = () =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  });

promise()
  .then(function() {
    console.log(`Promise: \n\tYay!`);
    return promise();
  })
  .then(function() {
    console.log(`\tWheeyee!`);
  });

console.log("Class:");

class BaseModel {
  constructor(options = {}, data = []) {
    console.log("1");
    this.name = "base";
    this.data = data;
    this.options = options;
  }

  getName() {
    console.log(`Class name: ${this.name}`);
  }
}

class Account extends BaseModel {
  constructor() {
    super({ private: true }, ["1", "2"]);
    this.name = "Account";
  }
}

let account = new Account();
account.getName();
