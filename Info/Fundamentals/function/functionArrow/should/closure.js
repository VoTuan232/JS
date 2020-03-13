let group = {
  group1: {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList() {
      console.log(this);
      this.students.forEach(student => {
        console.log('---Item---')
        console.log(this); // this này kế thừa từ function cha
        console.log(this.title + ": " + student);
      });
    }
  }
};
console.log('************Closure************')
group.group1.showList();
