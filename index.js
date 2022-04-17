// import html generator
const generateHTML = require("./src/generateHTML");

// import lib files
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// import npm
const fs = require("fs");
const inquirer = require("inquirer");

// add data array
const teamArray = []

// ask manager questions
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the team managers name', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the manager's name!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the manager's employee ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the manager's employee ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the manager's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ("Please enter the manager's email!")
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the manager's office number",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ('Please enter an office number!')
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ]).then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager); 
        console.log(manager + ' Added'); 
    })
};

// other employee questions
const addEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Enter the your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Enter the name of the employee?", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the employee's name!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the employee's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the employee's ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the employee's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ("Please enter the employee's email!")
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the employee's github username.",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Please enter the employee's github username!")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the intern's school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the intern's school!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ]) .then(employeeData => { 

        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);


        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

        }

        teamArray.push(employee); 

        console.log('Employees Added')

        if (confirmAddEmployee) {
            return addEmployee(teamArray); 
        } else {
            return teamArray;
        }
    })

};

// write html to file
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("Your team profile has been successfully created! Please check out the index.html")
        }
    })
}; 

// copy css to dist file
const copyFile = () => {
    fs.copyFile('./src/style.css', './dist/style.css', (err) => {
        if(err) {
            console.log(err)
        }
        else {
            console.log('style.css copied')
        }
    })
}


// run application
addManager()
    .then(addEmployee)
    .then(teamArray => {
        return genHTML(teamArray)
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
      })
      .then(copyFile)
      .catch(err => {
     console.log(err);
      });