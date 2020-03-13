var smartPhones = [
    { name: 'iphone', price: 649 },
    { name: 'Galaxy S6', price: 576 },
    { name: 'Galaxy Note 5', price: 489 }
];

console.log('*****************Map-Reduce***************')
console.log(smartPhones.map(smartPhone => smartPhone.price)); // [649, 576, 489]