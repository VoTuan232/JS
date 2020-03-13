/*
  Sử dụng this khi phương thức được gán cho biến
  Giá trị của this sẽ vượt xa sự tưởng tượng của chúng ta và được gán giá trị khác, nếu chúng ta gán phương thức sử dụng this cho một biến. Hãy xem ví dụ sau đây:

  Chúng ta có thể giải quyết vấn đề trên bằng cánh chỉ định giá trị của this bằng phương thức bind:
*/

// Biến data là biến toàn cục
var data = [
  { name: "Samantha", age: 12 },
  { name: "Alexis", age: 14 }
];

var user = {
  // data ở đây là một thuộc tính của đối tượng user
  data: [
    { name: "T. Woods", age: 37 },
    { name: "P. Mickelson", age: 43 }
  ],

  showData: function(event) {
    // chọn ngẫu nhiên 0 hoặc 1
    var randomNum = ((Math.random() * 2) | 0) + 1 - 1;

    // In ra một người chọn ngẫu nhiên từ user.data
    console.log(this.data[randomNum].name + " " + this.data[randomNum].age);
  }
};

// gán phương thức cho một biến
var showUserData = user.showData;
// ********************Giải pháp**************************
// Bind showData cho đối tượng user
var showUserData = user.showData.bind(user);

// Khi chúng ta thực thi hàm showUserData, giá trị được in ra lại được
// lấy ra từ biến data toàn cục, chứ không phải từ thuộc tính data của
// đối tượng user.
showUserData(); // Samantha 12 (dữ liệu lấy từ biến data toàn cục)
