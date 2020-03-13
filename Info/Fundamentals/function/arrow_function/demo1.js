function defer(f, ms) {
  console.log(f);
  console.log(ms);
  return function () {
    console.log("this");
    setTimeout(() => {
      // console.log(this);
      console.log(arguments)
      f.apply(this, arguments)
    }, ms);
  };
}

function sayHi(who) {
  console.log("Hello, " + who);
}

let sayHiDeferred = defer(sayHi, 2000);
console.log("sayHiDeferred " + sayHiDeferred);
sayHiDeferred("John"); // Hello, John after 2 seconds
