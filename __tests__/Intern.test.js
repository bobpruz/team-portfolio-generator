// import Intern.js file
const Intern = require("../lib/Intern");

// create intern
test("create a new Intern", () => {
  const intern = new Intern("Bob Intern", 997, "bobintern@email.com", "bobinterngithub");

  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
});
