let group = {
  group1: {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList() {
      console.log(this);
      this.students.forEach(student => {
        console.log(this.title + ": " + student);
      });
    }
  }
};

group.group1.showList();
