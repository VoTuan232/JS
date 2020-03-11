var sayHello = function(name, message) {
  console.log(message + name);
};

sayHello.call(sayHello, "Cường", " Xin chào ");
sayHello.apply(sayHello, ["Cường", " Xin chào "]);
