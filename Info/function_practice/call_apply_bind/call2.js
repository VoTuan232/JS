/*
  Dùng hàm call để gọi hàm anonymous
  Giả sử bạn tạo một hàm anonymous không có tên, lúc này bạn có thể sử dụng hàm call để thực thi hàm đó.
*/

(function(name) {
  console.log(name);
}.call(this, "Nguyễn Văn Cường"));
