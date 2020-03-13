const test = {
    name: 'test object',
    createAnonFunction: function () {
        console.log(this) // test
        var that = this;
        return function () {
            console.log(that);
            console.log(that.name);
            console.log(this); // window
            console.log(this.name); // ''
            console.log(arguments); // ''
        };
    },

    createArrowFunction: function () {
        console.log(this) // test
        return () => {
            console.log(this); // test: kế thừa function cha
            console.log(this.name);
            console.log(arguments); // kế thừa arguments cha
        };
    }
};

const anon = test.createAnonFunction('hello', 'world');
const arrow = test.createArrowFunction('hello', 'world');

anon();
console.log('****************************')
arrow();