// import Emgineer.js file
const Engineer = require("../lib/Engineer");

// create engineer
test("create a new Engineer", () => {
  const engineer = new Engineer("Bob", 998, "bob@email.com", "bobgithub");

  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
});
