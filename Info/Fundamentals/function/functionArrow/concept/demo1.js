function defer(f, ms) {
  console.log(f); // Function
  console.log(ms); // 2000
  console.log(arguments)
  return function () {
    // console.log(this); // window
    console.log(arguments)
    setTimeout(() => {
      // console.log(this); // window
      console.log('return')
      console.log(arguments)
      f.apply(this, arguments)
    }, ms);
  };
}

function sayHi(who) {
  console.log("Hello, " + who);
}

console.log('************************')
let sayHiDeferred = defer(sayHi, 2000);
console.log("sayHiDeferred " + sayHiDeferred); // function sayHiDeferred
console.log(sayHiDeferred) // function
sayHiDeferred("John"); // Hello, John after 2 seconds
