abstract class Warrior {
  readonly name: string;
  public weapon: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHi(): void {
    console.log(`Hello, I am ${this.name}`);
  }

  abstract arm(weapon: string): void; // hàm này phải được triển khai ở lớp dẫn xuất
}

class SuperWarrior extends Warrior {
  constructor(name: string) {
    super(name); // hàm khởi tạo trong lớp dẫn xuất phải gọi super()
  }
  arm(weapon): void {
    console.log(`${this.name} is a super warrior fighting with ${weapon}`);
  }
  fly(): void {
    console.log(`${this.name} can fly`);
  }
}

let hercules: Warrior; // đúng! nếu tạo một tham chiếu với kiểu dữ liệu là lớp trừu tượng
console.log(hercules);
// hercules = new Warrior(); // lỗi: không thể tạo một thể hiện của lớp trừu tượng
hercules = new SuperWarrior("Tuan"); // đúng! thể hiện được tạo ra từ lớp con của lớp trừu tượng
console.log(hercules);
console.log(typeof hercules);
hercules.arm("Hand");
hercules.sayHi();
// hercules.fly('Foot'); // lỗi: phương thức không tồn tại trong lớp trừu tượng.
// hercules.fly();
