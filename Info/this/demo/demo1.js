"use strict";

// John is running fast because John is trying to catch the train
// John is running fast because he is trying to catch the train.

/*
  Từ khóa this của JavaScript được sử dụng để tham chiếu đến các đối tượng mà hàm (nơi mà this được sử dụng) bị ràng buộc.
  This không chỉ tham chiếu đến đối tượng, mà nó còn chứa giá trị của đối tượng đó
  Thực tế, this có thể coi là một tham chiếu đến "đối tượng tiền đề" - đối tượng gọi hàm.

  Tất cả các hàm đều có thuộc tính, giống đối tượng
  Khi thực thi nó sẽ có thuộc tính this với giá trị là đối tượng gọi hàm sử dụng this

  This được gọi trọng 1 hàm thì sẽ chứa giá trị của đối tượng gọi hàm đó
*/

var person = {
  firstName: "Anh",
  lastName: "Tranngoc",
  fullName: function() {
    // Việc sử dụng "this" cũng tương tự như việc sử dụng "he"
    // trong câu tiếng Anh ở trên.
    console.log(this.firstName + " " + this.lastName);
    // Chúng ta cũng có thể viết thế này ( Giả sử sau này code lớn và person là biến cục bộ ???? => firstName ko biết của person toàn cục hay cục bộ )
    console.log(person.firstName + " " + person.lastName);
  }
};
person.fullName();

console.log("**********************************");

// Code rất thông dụng khi sử dụng jQuery
$("button").click(function(event) {
  // $(this) sẽ có giá trị của đối tượng button (`$("button")`) bởi
  // vì đối tượng này gọi phương thức click()
  console.log($(this).prop("name"));
});
