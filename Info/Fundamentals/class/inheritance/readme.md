Link: https://javascript.info/class-inheritance

super.method(): call method from parent class
super(...): only in constructor
arrow function: have no super

`[[HomeObject]]`: thuộc tính đặc biệt của function
Khi function được chỉ định là 1 class or object method, thuộc tính này chính là object đó
Nơi duy nhất sử dụng là `super`
==> Nếu method ko sử dụng super thì method đó là free và có thể copy tới các object
