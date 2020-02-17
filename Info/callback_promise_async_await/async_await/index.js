"use strict";

function printNumber(number) {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        console.log(number)
        resolve('done')
      },
      number === 1 ? 2000 : 1000
    )
  })
}

async function printAll() {
  await printNumber(1).then(x => console.log(x));
  await printNumber(2);
  await printNumber(4);
  await printNumber(5);
  await printNumber(6);
}
printAll();