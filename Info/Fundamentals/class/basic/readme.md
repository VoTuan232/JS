Link: https://javascript.info/class

`Class`
Method constructor được gọi tự động bằng `new`: Class constructor User cannot be invoked without 'new'
`new Class()` sẽ tạo 1 object mới cùng với tất cả method

Khi `new Class()` được gọi:

1. New object đc tạo
2. construcotr run with arguments

Trong JS, class là 1 function.
`class User {...}` thực chất:

1. Tạo 1 function có tên User
2. Lưu trữ method class trong User.prototype (={constructor, method,...})
   ==> khi new User đc tạo, object sẽ có **proto** là constructor && methods class.

All code in class is `strict` mode

`Class expression`:
Giống function, class có thể đc định nghĩa bên trong biểu thức khác, pass around, returned, assigned,..
Nếu class có tên, thì sẽ chỉ đc hiển thị bên trong class đó
