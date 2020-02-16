"use strict";

// https://vntalking.com/cach-su-dung-promise-trong-javascript.html

// catch đc sử dụng khi reject() được gọi
// chỉ dùng khi xảy ra lỗi

// aPromise.catch(doThisWhenItRain) === aPromise.then(null, doThisWhenItRain);

// Khi một function bị lỗi, promise bị reject (thất hứa)
new Promise((resolve, reject) => {
    // reject(new Error("Whoops!"));
    resolve('OK');
  })
  .then(res => {
    throw new Error("Whoops!");
  })
  .catch(x => console.log(x))
  .then(() => console.log('Next success handler runs!'));; // Error: Whoops!