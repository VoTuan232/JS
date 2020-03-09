"use strict";

function readData() {
  let json = '{ "age": 30 }';

  try {
    blabla(); // error!
  } catch (e) {
    console.log(e.name); // ReferenceError
    if (e.name != "SyntaxError") {
      throw e; // rethrow (don't know how to deal with it)
    }
  }
}

try {
  readData();
} catch (e) {
  console.log("External catch got: " + e); // caught it!
}
