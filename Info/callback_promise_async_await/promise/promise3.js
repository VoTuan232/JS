"use strict";

function printNumber(number) {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                if (number < 0) {
                    reject();
                } else {
                    console.log(number);
                    resolve();
                }
            },
            1000
        )
    })
}
printNumber(1)
    .then(() => printNumber(2))
    .then(() => printNumber(3))
    .then(() => printNumber(4))
    .then(() => printNumber(5))
    .then(() => printNumber(6))
    .then(() => printNumber(7))
    .then(() => printNumber(8))
    // .reject(() => console.log("number < 0"))