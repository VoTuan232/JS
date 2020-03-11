/*
  Dùng hàm call để đổi giá trị của this
  Trong một hàm thì this chính là hàm đó, tuy nhiên bạn hoàn toàn có thể thay đổi đối tượng this trong hàm bằng cách sử dụng hàm call.
*/

function showMessage(message) {
  this.message = message;
  return this;
}

var blog = showMessage.call({ blog: "freetuts.net" }, "Nguyễn Văn Cường");
console.log(blog); // blog chính là đối tượng {"blog" : "freetuts.net", "message" : "Nguyễn Văn Cường"}
