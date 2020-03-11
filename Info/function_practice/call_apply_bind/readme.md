Hàm call() dùng để thực thi một hàm nào đó với các tham số truyền vào (nếu có), hàm này được tích hợp sẵn trong các đối tượng là function.
Hàm apply có công dụng giống như hàm call, tuy nhiên về cú pháp thì có một chút khác biệt như sau:

Tham số đầu tiên của hàm call() là đối tượng this, tiếp theo chính là các tham số của hàm cần gọi.
Tham số đầu tiên của hàm apply() là đối tượng this, tham số tiếp theo là một mảng chứa các tham số của hàm cần gọi.

Trong thực tế thì hàm call() và hàm apply() rất ít khi được sử dụng bởi rất ít người quan tâm đến, nhưng nếu ta biết vận dụng thì hàm này rất hữu ích.

Bind là 1 hàm trong prototype nên chỉ có hàm mới gọi đc
Chúng ta gọi Bind method dùng để xác định tham số 'this' cho một function.
