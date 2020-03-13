Link ref: https://viblo.asia/p/the-nao-la-arrow-function-cach-thuc-su-dung-arrow-function-va-nhung-dieu-can-chu-y-Qbq5QL4GlD8

            https://zendev.com/2018/10/01/javascript-arrow-functions-how-why-when.html

Không có this
Không có argument
Không thể gọi với từ khóa new (arrow function ko thể sử dụng như 1 constructor)
Không có super (Nghiên cứu trong phần kế thừa)

==> arrow function sẽ ko có bối cảnh của riêng nó, mà là hoạt động trong mã hiện tại.
==> this and argurments sẽ được kế thừa từ hàm cha của chúng
Các phương thức call (), apply (), và bind () sẽ không thay đổi giá trị của this trong arrow function
Trong thực tế, giá trị của this bên trong một hàm đơn giản là không thể thay đổi - nó sẽ luôn là giá trị tương tự như khi hàm được gọi) Nếu bạn cần bind đến một giá trị khác, cần sử dụng function expression như bình thường.
