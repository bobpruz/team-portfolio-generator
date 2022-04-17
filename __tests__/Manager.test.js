// import Manager.js file
const Manager = require("../lib/Manager");

// create new manager
test("create a new manager", () => {
  const manager = new Manager("Big Bossman", 999, "bigbossman@email.com", 999);

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(Number));

});
