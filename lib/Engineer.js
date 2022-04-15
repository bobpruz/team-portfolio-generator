// include Employee class
const Employee = require("./Employee");

// create Engineer
class Engineer extends Employee {
  constructor(name, id, email, github) {
    // use Employee class
    super(name, id, email);

    this.github = github

  }

  // set role as Manager
  getRole() {
    return "Engineer";
  }

  getGithub() {
    return this.github;
}
}

module.exports = Engineer;
