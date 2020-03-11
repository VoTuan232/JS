var imgs = {
  constructor(name, bread) {
    this.name = name;
    this.bread = bread;
  },
  a: () => {
    this.b();
  },
  b: () => {
    console.log("b");
  },
  c: function() {
    console.log("c");
  }
};

console.log(imgs.a);

// class Dog {
//   constructor(name, bread) {
//     this.name = name;
//     this.bread = bread;
//     this.bark = () => {
//       return `Bark Bark! My name is ${this.name}`;
//     };
//     console.log(this);
//   }
// }
// const mini = new Dog("Mini", "Spitz");
// console.log(mini.bark());
