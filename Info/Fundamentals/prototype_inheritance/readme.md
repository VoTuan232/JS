Link:
https://javascript.info/prototype-inheritance
https://viblo.asia/p/prototype-trong-javascript-hoat-dong-nhu-the-nao-RQqKLYXOZ7z

Prototypal Inheritance

Trong js, Object có 1 thuộc tính ẩn [[Prototype]], null hoặc trỏ tới 1 object khác(prototype object)
Khi đối tượng dc khởi tạo, js engines sẽ thêm thuộc tính proto vào đối tượng

Khi muốn đọc 1 thuộc tính từ 1 đối tượng mà ko có => tiếp tực đọc từ prototype object nếu tồn tại ==> gọi là kế thừa nguyên mẫu (prototypal inheritance)

Là thuộc tính ẩn nhưng vẫn có thể lấy đc bằng thuộc tính: **proto**
**proto** ko giống [[Prototype]] mà là getter/setter cho [[Prototype]] (proto là histor)
**proto** được thay thể bằng Object.getPrototypeOf/Object.setPrototypeOf

EX: rabbit.**proto** = animal;
"animal is the prototype of rabbit" or "rabbit prototypically inherits from animal".

Có 2 hạn chế:

1. Reference ko thể đi vòng tròn. => lỗi
2. Value of **proto** là null hoặc object. Other type sẽ bị bỏ qua
   Ngoài ra, chỉ đc kế thừa từ 1 [[Prototype]]

Prototype object chỉ đc đọc: ko viết, xóa ( trừ các thuộc tính accessor: getter/setter)

Object.keys: only property of own
for...in: all property (own and prototype object)
hasOwnProperty(): check thuộc tính của riêng object đó.
