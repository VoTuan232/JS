"use strict";

// kết thúc sớm 1 promise: ==> 2 cách (ko return (vẫn chạy tiếp các then sau đó) hoặc dùng reject)
// Tìm kiếm User qua email
//     .then(
//       Nếu email đã tồn tại thì sẽ kết thúc sớm Promise chaining.
//       Ngược lại sẽ thực hiện bước tiếp theo.
//     )
//     .then(
//       Hash mật khẩu.
//     )
//     .then(
//       Tạo User và lưu vào cơ sở dữ liệu.
//     )
//     .catch(
//       Xử lý khi có bất kỳ lỗi gì xảy ra.
//     )

const increase = x => {
  console.log(x);
  return x + 1;
}

// Sử dụng not return 
// If res > 3 => return underfind ==> vẫn chạy hết then phía dưới 
const runNotReturn = (x) => {
  console.log('Run not return');
  new Promise((resolve, reject) => {
      resolve(x);
    })
    .then(res => {
      if (res <= 3) return increase(res);
    })
    .then(res => {
      console.log('come not return!'); // run here
      if (res !== undefined) {
        return increase(res);
      }
    })
    .then(res => {
      if (res !== undefined) return increase(res);
    })
    .catch(err => console.log('Catched: ' + err));
}

// sử dụng reject
const runUseReject = (x) => {
  console.log('Run use reject');
  new Promise((resolve, reject) => {
      resolve(x);
    })
    .then(res => {
      if (res <= 3) return increase(res);
      return Promise.reject(res);
    })
    .then(res => {
      console.log('come use reject!'); // ko vào đây
      return increase(res);
    })
    .then(res => increase(res))
    .catch(err => console.log('Catched: ' + err));
}
runNotReturn(4);
runUseReject(4);