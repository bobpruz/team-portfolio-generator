// generate Manager
const genManager = function (manager) {
  return `
    <div class="col-12 mt-4">
        <div class="card h-100 w-75">
            <div class="card-header">
                <h4>${manager.name}</h4>
                <h3>Manager</h3>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
};

//  generate Engineer
const genEngineer = function (engineer) {
  return `
    <div class="col-md-6 col-12 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h4>${engineer.name}</h4>
                <h3>Engineer</h3>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `;
};

//  generate Engineer
const genIntern = function (intern) {
  return `
      <div class="col-md-6 col-12 mt-4">
          <div class="card h-100">
              <div class="card-header">
                  <h4>${intern.name}</h4>
                  <h3>Intern</h3>
              </div>
              <div class="card-body">
                  <p class="id">ID: ${intern.id}</p>
                  <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                  <p class="school">School: ${intern.school}</p>
              </div>
          </div>
      </div>
      `;
};

//   create array of cards

genHTML = (data) => {
  htmlArray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    // create manager card
    if (role === "Manager") {
      const managerCard = genManager(employee);

      htmlArray.push(managerCard);
    }

    // create engineer card
    if (role === "Engineer") {
      const engineerCard = genEngineer(employee);

      htmlArray.push(engineerCard);
    }

    // create intern card
    if (role === "Intern") {
      const internCard = genIntern(employee);

      htmlArray.push(internCard);
    }
  };

 // join the strings together   
  const teamCards = htmlArray.join("");

  // return page
const createPage = genPage(teamCards);
return createPage;

};



// generate page
const genPage = function (teamCards) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
  
  </head>
  <body>
      <header>
          <nav class="navbar" id="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  ${teamCards}
              </div>
          </div>
      </main>
  </body>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js"></script>
  
  </html>
    `;
};

// export to index
module.exports = genHTML; 