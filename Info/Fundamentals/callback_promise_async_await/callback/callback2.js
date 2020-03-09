"use strict";

function vatLongGa() {
    console.log("vat long ga");
}

function soCheGa(callback) {
    nauNuocSoi(vatLongGa);
}

function nauNuocSoi(callback) {
    setTimeout(function() {
        console.log("nau nuoc soi");
        callback();
    }, 1000)
}

soCheGa();