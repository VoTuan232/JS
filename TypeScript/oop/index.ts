class ConNguoi {
  age: number;
  name: string;

  constructor(name, age) {
    this.age = age;
    this.name = name;
  }

  getAge() {
    return this.age;
  }

  makeSound(sound: string) {
    console.log(sound);
  }
}

class ConGai extends ConNguoi {
  hair: "shor1t" | "long";

  constructor(name, age, hair) {
    super(name, age);
    this.hair = hair;
  }

  makeSound(sound) {
    super.makeSound("Con gai said " + sound);
  }
}

class ConTrai extends ConNguoi {
  height: "long" | "short";

  constructor(name, age, height) {
    super(name, age);
    this.height = height;
  }

  makeSound(sound) {
    super.makeSound("Con trai said " + sound);
  }
}

let conNguoi = new ConNguoi("Vo Anh Tuan", 21);
console.log(conNguoi.getAge());
let conGai = new ConGai("Linh", 22, "short");
console.log(conGai.getAge());
conGai.makeSound("Mình là Linh");
let conTrai = new ConTrai("Tuấn", 21, "long");
console.log(conTrai.getAge());
conTrai.makeSound("Mình là Tuấn");
