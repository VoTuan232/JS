Link: https://javascript.info/function-prototype

Một object có thể được tạo bởi 1 construcotr function, new F()
Nếu F.prototype là 1 object, toán tử new sẽ set [[Prototype]] cho new object

JS có sự kế thừa nguyên mẫu ngay từ đầu. Đó là tính năng cốt lõi của ngôn ngữ.
Nhưng ko có quyền truy cập trực tiếp vào nó. Cái tin cậy nhất là một thuộc tính 'prototype' của function constructor.
Vì vậy có nhiều scripts vẫn dùng nó.

F.prototype là thuộc tính có tên là prototype trên F
Thuộc tính F.prototype chỉ đc dùng khi gọi new F, nó sẽ gán [[Prototype]] tới new object, sau đó ko có mối liên hệ nào giữa F.prototype và new object
Ko nhầm lẫn F.prototype với [[Prototype]]
Giá trị của F.prototype phải là object hoặc null. Loại khác bị loại bỏ.
Thuộc tính prototype chỉ đặc biệt khi được thiết lập trong constructor function, và đc gọi với từ khóa new. Trong các trường hợp khác, ko có gì đặc biệt
ex: var x= { id: 1, prototype: 'value'} // no magic here

Mỗi function đều có 1 prototype mặc định, là 1 object cùng 1 thuộc tính constructor trỏ lại chính nó
function Rabbit() {}
/_ default prototype
Rabbit.prototype = { constructor: Rabbit };
_/
==> để giữ constructor này chúng ta có thểm thêm/xóa thuộc tính vào constructor này mà ko cần ghi đè nó.
