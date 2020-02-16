"use strict";

const myPromise = new Promise(function(resolve, reject) {
    resolve('done');
});

myPromise
    .then((response) => {
        console.log(response)
    })
    .catch((err) => {
        console.error(err)
    })