Link: https://javascript.info/constructor-new

Thông thường chúng ta cần tạo nhiều đối tượng giống nhau {}
Chúng ta cần hàm tạo `constructor` và toán tử `new`

Hàm constructor:

1. Được đặt tên bằng chữ in hoa đầu tiên
2. Chỉ đc thực hiện cùng toán tử `new` (Với new ta biết object đang đc tạo)
   Mục đích: để tạo code có thể dùng lại đc (new F('A'), new F('B'), ...)
3. Thông thường constructor ko có return, công việc là liệt kê những thứ cần thiết và tự động return
   Nếu có return => quy tắc:
4. Nếu return trả về 1 object, thì object sẽ thay thế this 2. Nếu trả về primitive, bị loại bỏ

Khi một function thực thi cùng toán tử new:

1. Một object mới đc tạo và gán cho this
2. Function body đc thực thi, add thuộc tính vào this
3. Giá trị của this đc trả về

Chúng ta có thể bỏ () nếu ko có tham số: let a = new A; (ko dùng: not good style)
