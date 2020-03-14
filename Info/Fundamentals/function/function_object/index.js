console.log('***************Name property of function*************')
function sayHi() {
  console.log("Hi");
}

console.log(sayHi.name); // sayHi

let sayHi2 = function () {
  console.log("Hi");
};

console.log(sayHi2.name); // sayHi2 (there's a name!)

function f(sayHi = function () { }) {
  console.log(sayHi.name); // sayHi (works!)
}

f();

console.log('Name of object method:')
let user = {

  sayHi() {
    // ...
  },

  sayBye: function () {
    // ...
  }

}

console.log(user.sayHi.name); // sayHi
console.log(user.sayBye.name); // sayBye


console.log(function () { }.name) // empty

console.log('*******************Length property of function*********')
function f1() { }
function f2(a, b) { }
function many(a, b, ...more) { }

console.log(f1.length); // 1
console.log(f2.length); // 2
console.log(many.length); // 2

function ask(question, ...handlers) {
  console.log(ask.length) // 1
  let isYes = confirm(question);

  for (let handler of handlers) {
    if (handler.length == 0) {
      if (isYes) handler();
    } else {
      handler(isYes);
    }
  }

}

ask("Question?", () => console.log('You said yes'), result => console.log(result));

console.log('**************Named Function Expression(NFE)*************')
let sayHi3 = function func(who) {
  console.log(`Hello, ${who}`);
};

sayHi3("John"); // Hello, John
console.log(sayHi3.name) // func


console.log('*******Custom property************')
function makeCounter() {

  function counter() {
    return counter.count++;
  };

  counter.count = 0;

  return counter;
}

let counter = makeCounter();

counter.count = 10;
console.log(counter()); // 10
console.log(counter()); // 11