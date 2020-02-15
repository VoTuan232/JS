"use strict";
const request = require('request');

request(`https://maciejtreder.github.io/asynchronous-javascript/directors`, { json: true }, (err, res, directors) => {
    console.log('done');
});