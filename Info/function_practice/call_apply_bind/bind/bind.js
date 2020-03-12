https://viblo.asia/p/bind-apply-and-call-trong-javascript-DzVGpoMDvnW

<input id="click" type="button" value="Click" />
  <input id="usingBind" type="button" value="UsingBind" />
  <br />
  <span id="showInfo"></span>

var user = {
  name: "A",
  age: "35",
  showInfo: function () {
    $("#showInfo").text("This is " + this.name + "-" + this.age + "years old")
  }
}

$("#click").click(user.showInfo);
$("#usingBind").click(user.showInfo.bind(user));


console.log('****************DEMO 2*****************')

var name = "xxx";
var user = {
  name: "yyy",
  showInfo: function () {
    console.log("Name:" + this.name);
  }
}

var showData = user.showInfo;
var showDataBind = user.showInfo.bind(user)
showData() // call global data : return Name: xxx
showDataBind() // call local data: return Name: yyy

console.log('****************DEMO 3*****************')
// bind còn có thể bind được các tham số truyền vào cho hàm . Tức là ta có thể tao ra một function mới từ function cũ bằng cách gắn mặc định một tham số cho function cũ đó .
function log(level, time, msg) {
  console.log(level + “-” + time +”: ” + msg);
}
var logAccessToday = log.bind(“Access”, “Today”, msg);