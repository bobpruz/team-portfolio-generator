// include Employee class
const Employee = require("./Employee");

// create Engineer
class Intern extends Employee {
  constructor(name, id, email, school) {
    // use Employee class
    super(name, id, email);

    this.school = school

  }

  // set role as Manager
  getRole() {
    return "Intern";
  }

  getSchool() {
    return this.school;
}
}

module.exports = Intern;