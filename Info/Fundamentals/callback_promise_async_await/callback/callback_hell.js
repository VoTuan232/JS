"use strict";

function printNumber(number, callback) {
    setTimeout(
        () => {
            console.log(number)
            callback()
        },
        Math.floor(Math.random() * 100) + 1
    )
}

function printAll() {
    printNumber(1, function() {
        printNumber(2, function() {
            printNumber(3, function() {
                printNumber(4, function() {
                    printNumber(5, function() {
                        printNumber(6, function() {
                            printNumber(7, function() {
                                printNumber(8, function() {
                                    printNumber(9, function() {
                                        printNumber(10, function() {

                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}
printAll();