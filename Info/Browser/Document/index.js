function sayHi() {
  alert("Hello");
}

// global functions are methods of the global object:
window.sayHi();
alert(location.href); // shows current URL
if (confirm("Go to Wikipedia?")) {
  location.href = "https://wikipedia.org"; // redirect the browser to another URL
}
