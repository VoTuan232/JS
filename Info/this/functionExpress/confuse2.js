"use trict";

/*
Sử dụng this trong phương thức được truyền như callback
  User.clickHandler sẽ không tham chiếu đến đối tượng user nữa mà bây giờ, nó sẽ tham chiếu đến đối tượng mà nó được gọi. 
  Trong trường hợp này, nó sẽ tham chiếu đến đối tượng button

  Giải pháp:
    Bởi vì chúng ta cần this.data tham chiếu đến thuộc tính data của đối tượng user, 
    Chúng ta có thể sử dụng các phương thức bind, apply, call để chỉ định giá trị của this.
*/

// Chúng ta có một đối tượng đơn giản với phương thức clickHandler.
// Đây là phương thức là chúng ta muốn gọi khi một button được click.
var user = {
  data: [
    { name: "T. Woods", age: 37 },
    { name: "P. Mickelson", age: 43 }
  ],
  clickHandler: function (event) {
    // Chọn ngẫu nhiên 0 hoặc 1
    var randomNum = ((Math.random() * 2) | 0) + 1 - 1;

    // Dòng dưới đây sẽ in ra tên và tuối của một user ngẫu nhiên
    // lấy từ array
    console.log(this.data[randomNum].name + " " + this.data[randomNum].age);
  }
};

// button được bảo bởi hàm jQuery $, nên nó trở thành một đối tượng
// jQuery.  Và output sẽ la undefined bởi vì không có thuộc tính data
// cho đối tượng button

$("button").click(user.clickHandler); // Cannot read property '0' of undefined

$("button").click(user.clickHandler.bind(user)); // P. Mickelson 43
