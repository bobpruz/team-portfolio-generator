// include Employee class
const Employee = require("./Employee");

// create Manager
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // use Employee class
    super(name, id, email);

    this.officeNumber = officeNumber

  }

  // set role as Manager
  getRole() {
    return "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
}
}

module.exports = Manager;
