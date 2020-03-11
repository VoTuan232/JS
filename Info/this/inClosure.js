// "use strict";
// this trong cloure sẽ ko thể truy cập giá trị this bên ngoài hàm
// nếu dùng strict mode => this.tournament lỗi
// nếu ko dùng strict mode => this là biến toàn cục window

var user = {
  tournament: "The Masters",
  data: [
    { name: "T. Woods", age: 37 },
    { name: "P. Mickelson", age: 43 }
  ],

  clickHandler: function() {
    console.log(this);
    // let that = this;
    //Sử dụng con trỏ this ở đây thì OK, this đang mang giá trị tham chiếu tới đối tượng “user”
    this.data.forEach(function(person) {
      // console.log(this); //  biến toàn cục
      // Tuy nhiên, trong closure này thì this không còn tham chiếu tới đối tượng “user” nữa
      // Hàm inner function này không thể truy cập tới this của outer function

      console.log(person.name + " is playing at " + this.tournament); //underfined
    });
  }
};

user.clickHandler();
console.log(typeof user);
