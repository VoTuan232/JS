'use strict'
const euros = [1, 2, 3];

const average = euros.reduce((total, amount, index, array) => {
    console.log(array)
    console.log(euros)
    console.log('total' + total)
    console.log('amount' + amount)
    total += amount;
    if (index === array.length - 1) {
        return total / euros.length;
    } else {
        return total;
    }
});

console.log(average)