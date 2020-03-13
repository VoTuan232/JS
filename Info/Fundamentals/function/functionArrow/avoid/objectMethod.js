const person = {
    points: 23,
    score: () => {
        console.log(this) // window
        this.points++;
        console.log(this.points) // NaN
    }
    // score() {
    //     this.points++;
    // }
}

const buttonObjectMethod = document.querySelector('#score');

buttonObjectMethod.addEventListener('click', function () {
    console.log(this) // button
    person.score();
    console.log(person);
    console.log(this.points) // underfined
});