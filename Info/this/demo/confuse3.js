// "use strict";

/*
  Sử dụng this trong closure

  Giải pháp:
    Chúng ta sử dụng một kỹ thuật rất phổ biến trong JavaScript, đó là gán giá trị của this cho một biến khác trước khi chúng ta vào hàm forEach.
    var that = this;
*/

var user = {
  tournament: "The Masters",
  data: [
    { name: "T. Woods", age: 37 },
    { name: "P. Mickelson", age: 43 }
  ],

  clickHandler: function() {
    // Việc sử dụng this.data ở đây không vấn đề gì, bởi vì "this"
    // tham chiếu đến đối tượng user và data là một thuộc tính của
    // đối tượng.
    this.data.forEach(function(person) {
      // Nhưng ở trong hàm vô danh này (nó được truyền cho
      // phương thức forEach), "this" không tham chiếu đến đối
      // tượng user nữa.  Hàm này không thể truy cập "this" của
      // hàm bên ngoài.
      console.log("What is This referring to? " + this); //[object Window]
      console.log(person.name + " is playing at " + this.tournament);
      // T. Woods is playing at undefined
      // P. Mickelson is playing at undefined
    });
  }
};

user.clickHandler(); // What is "this" referring to? [object Window]
