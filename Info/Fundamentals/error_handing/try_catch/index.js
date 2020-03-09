"use strict";

/* 
Chạy try: nếu ko có lỗi => catch bị bỏ qua
    Nếu xảy ra lỗi thì try bị dừng lại và bắt đầu chạy catch
    Try vẫn sẽ chạy cho tới khi gặp lỗi

Try catch chạy đc khi cú pháp js phải đúng
Try catch chạy đồng bộ, tức setTimeout thì ko đc chạy
*/

try {
  console.log("still work here!");
  x = 0;
  y = 0;
} catch (err) {
  // console.log(err);
  console.log("error");
}
