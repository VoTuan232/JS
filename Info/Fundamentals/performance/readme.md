Link ref: https://vntalking.com/tang-toc-do-code-javascript.html

70 khung hình mỗi giây
==> mỗi khung hình max chỉ là 1000/60 = ~16.6 milliseconds (FPS 60)

JS Runtime bao gồm:
Call Stack
Render Queue
Callback Queue
Thứ tự ưu tiên là: Call Stack > Render Queue > Callback queue

- Đọc file
  Ưu tiên async api thay vì sync
  writeFile > writeFileSync
- Animation
  Ưu tiên requestAnimationFrame thay vì setTimeout, setInterval
