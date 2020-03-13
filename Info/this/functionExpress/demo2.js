/*
  Với phạm vi toàn cục, khi code được thực thi ở trình duyệt, mọi biến và hàm toàn cục đều được định nghĩa trên đối tượng window
*/

var firstName = "Anh",
  lastName = "Tranngoc";

function showFullName() {
  // "this" trong hàm này sẽ có giá trị của đối tượng window bởi vì
  // showFullName() là hàm được định nghĩa một cách toàn cục, cũng
  // như các biến firstName và lastName
  console.log(this.firstName + " " + this.lastName);
}

var person = {
  firstName: "VietPhuong",
  lastName: "Doan",
  showFullName: function() {
    // "this" trong hàm này tham chiếu đến đối tượng person, bởi
    // vì showFullName là hàm được gọi bởi đói tượng này
    console.log(this.firstName + " " + this.lastName);
  }
};

showFullName(); // Anh Tranngoc

// window là đối tượng mà mọi biến và hàm toàn cục được định nghĩa
// trên đó, vì thế:
window.showFullName(); // Anh Tranngoc

// "this" bên trong phương thức showFullName định nghĩa bên trong đối
// tượng person sẽ tham chiếu đến đối tượng đó, vì vậy:
person.showFullName(); // VietPhuong Doan
