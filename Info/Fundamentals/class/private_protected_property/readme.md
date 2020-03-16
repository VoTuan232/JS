Link: https://javascript.info/private-protected-properties-methods

Điều quan trọng trong OOP: phân chia giao diện `bên trong` từ `bên ngoài`
Ex: Máy xay cà phê
Bên ngoài: vỏ, nút bấm, bộ phận làm nóng, ống nồi hơi...
Bên trong: rất phức tạp
Bên trong khá phức tạp nhưng người dùng có thể sử dụng mà ko cần biết. ==> tất cả chi tiết đc điều chỉnh và sử dụng bên trong.
Nếu chúng ta tháo bỏ vỏ ==> sử dụng nguy hiểm và nút bấm ở đâu?

Trong OOP, thuộc tính và phương thức có 2 loại:

1. Internal interface: methods and properties có thể truy cập từ methods khác của lớp, nhưng ko thể truy cập từ bên ngoài. Các chi tiết sử dụng lẫn nhau.
   Ví dụ: ống nồi hơi gắn vào bộ phận làm nóng
2. External interface: methods and properties có thể truy cập từ bên ngoài. Các chi tiết đc đóng kín.

Trong js, có 2 loại đối tượng object(properties and methods)

1. public: có thể truy cập từ bất cứ đâu. chúng bao gồm các `external interface`
2. private: chỉ có thể truy cập bên trong lớp. chúng là `internal interface`
3. protected ko đc triển khai trong js, nhưng rất hữu ích.
