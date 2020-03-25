let obj = {
  name: "vat",
  methods() {
    console.log(this.name);
  }
};

let obj1 = {
  name: "vat1",
  methods() {
    console.log(this.name);
  }
};

let x = obj.methods.bind(obj, obj1, "123");
x();
