function defer(f, ms) {
  console.log(f);
  console.log(ms);
  return function() {
    console.log("this");
    console.log(this);
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

function sayHi(who) {
  console.log("Hello, " + who);
}

let sayHiDeferred = defer(sayHi, 2000);
console.log("sayHiDeferred " + sayHiDeferred);
sayHiDeferred("John"); // Hello, John after 2 seconds
