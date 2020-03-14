Link Ref: https://javascript.info/function-basics

Nên sử dụng biến local, Code hiện đại có ít hoặc ko có biến global

Parameter (hay arguments): truyền dữ liệu tới function
Truyền param vào hàm, giá trị sẽ đc copy tới phạm vi local trong hàm.

Một function có thể trả về giá trị (hoặc ko có gì: `return;`) và sẽ dừng lại khi thực thi return.
Nếu 1 hàm ko có giá trị trả về, nó sẽ return underfined;
`function doNothing() { /* empty */ } // function doNothing() { return; }`
`alert( doNothing() === undefined ); // true`

Function là action => name of function là động từ
