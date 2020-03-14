function showMessage(from, text) { // arguments: from, text
  from = from.toLowerCase();
  console.log(arguments)
  console.log(from + ': ' + text);
}

let from = 'VoAnhTuan';

showMessage(from, 'Hello!'); // Ann: Hello! (*)

console.log(from) // 'VoAnhTuan'

console.log('******Return***********')
function doNothing() { /* empty */ }
function doNothing1() { return; }
console.log(doNothing() === undefined); // true
console.log(doNothing1() === undefined); // true

var x = {
  name: 'hihi',
  walk() {
    console.log('eat')
  }
}

console.log(x)