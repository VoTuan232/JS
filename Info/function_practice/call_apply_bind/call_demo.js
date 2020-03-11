/*
  Hàm call() dùng để thực thi một hàm nào đó với các tham số truyền vào (nếu có), hàm này được tích hợp sẵn trong các đối tượng là function.
*/

function myProfile(name, age) {
  console.log(name);
  console.log(age);
  return this;
}

var Cuong = myProfile.call(myProfile, "Nguyễn Văn Cường", 27);

// Cách thông thường
// function myProfile(name, age){
//   console.log(name);
//   console.log(age);
//   return this;
// }

// myProfile("Nguyễn Văn Cường", 27);
