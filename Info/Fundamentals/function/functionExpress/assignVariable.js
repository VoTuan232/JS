// "use strict";
var name = "Peter";
var Hocsinh = {
  name: "John",
  printName: function () {
    console.log(this); //  biến toàn cục nếu như ko dùng bind
    console.log(this.name);
  }
};

console.log('*************Confuse: Assign Method to variable*************')
//Gán hàm Hocsinh.printName vào một biến
var printHocsinhName2 = Hocsinh.printName;

//Gọi hàm printHocsinhName để hiển thị tên học sinh
printHocsinhName2(); // Perter

var printHocsinhName2 = Hocsinh.printName.bind(Hocsinh);
printHocsinhName2(); // John
