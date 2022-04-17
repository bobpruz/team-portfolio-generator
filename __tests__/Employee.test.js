// import Employee.js file
const Employee = require("../lib/Employee");

// create employee
test("create a new Employee", () => {
  const employee = new Employee("Bob", 995, "bob@email.com", "bobgithub");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});
