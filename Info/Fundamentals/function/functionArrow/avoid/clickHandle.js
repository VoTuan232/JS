const button = document.querySelector('#pushy');

button.addEventListener('click', () => {
    console.log(this); // this lúc này là window
    this.classList.toggle('on');
});

// button.addEventListener('click', function () {
//     console.log(this); // this lúc này là window
//     this.classList.toggle('on');
// });