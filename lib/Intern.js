// import Intern.js file
const Intern = require("../lib/Intern");

// create intern
test("create a new Intern", () => {
  const intern = new Intern("Bob", 998, "bob@email.com", "bobgithub");

  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
});