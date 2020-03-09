"use strict";

window.onerror = function(message, url, line, col, error) {
  console.log(`${message}\n At ${line}:${col} of ${url}`);
};

function readData() {
  badFunc(); // Whoops, something went wrong!
}

readData();
