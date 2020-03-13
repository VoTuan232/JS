// "use trict";
var name = "Peter";
var Hocsinh = {
  name: "John",
  printName: function() {
    // console.log(this); //  biến toàn cục
    console.log(this.name);
  }
};

//Gán hàm Hocsinh.printName vào một biến
var printHocsinhName2 = Hocsinh.printName;
console.log(printHocsinhName2);
console.log(typeof printHocsinhName2);
//Gọi hàm printHocsinhName để hiển thị tên học sinh
printHocsinhName2(); // undefined

console.log("***********");

// bind
var printHocsinhName2 = Hocsinh.printName.bind(Hocsinh);
console.log(printHocsinhName2);
console.log(typeof printHocsinhName2);
printHocsinhName2(); // undefined

console.log("****************");
Hocsinh.printName();
