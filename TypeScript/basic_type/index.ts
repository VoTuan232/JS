class Employee {
  public empCode: string;
  empName: string; // default is public
}

let emp = new Employee();
emp.empName = "Swati"; // ok
emp.empCode = "123"; // ok
console.log(emp);
