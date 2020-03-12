Chuyển đổi từ object tới nguyên thủy được gọi tự động bởi nhiều hàm và toán tử

Có 3 hint:
string:
number: phép toán
default: một vài toán tử

Nêu rõ toán tử nào sử dụng hint nào

Thuật toán chuyển đổi:
obj[Symbol.toPrimitive](hint) nếu tồn tại methods này
Nếu hint là string:
obj.toString() sau đó obj.valueOf()
Nếu hint là number:
obj.valueOf() sau đó obj.toString()
