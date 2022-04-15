// import Manager.js file
const Manager = require("../lib/Manager");

// create new manager
test("create a new manager", () => {
  const manager = new Manager("Big Bossman", 999, "bigbpssman@email.com", 999);

  expect(manager.name).toEqual(expact.any(String));
  expect(manager.id).toEqual(expact.any(Number));
  expect(manager.email).toEqual(expact.any(String));
  expect(manager.officenumber).toEqual(expact.any(Number));

});