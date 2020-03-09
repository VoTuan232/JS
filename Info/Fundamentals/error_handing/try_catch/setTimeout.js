"use strict";

// try {
//   console.log("still work");
//   setTimeout(function() {
//     x = 0; // js die here, do đc thực hiện sau đó đã rời khỏi try catch
//   }, 1000);
// } catch (e) {
//   console.log("won't work");
// }

// Xử lí: viết try catch trong sync

setTimeout(function() {
  try {
    noSuchVariable; // try..catch handles the error!
  } catch (err) {
    console.log(err);
    console.log("error name: " + err.name);
    console.log("error message: " + err.message);
    console.log("error stack: " + err.stack);
    console.log("error is caught here!");
  }
}, 1000);
