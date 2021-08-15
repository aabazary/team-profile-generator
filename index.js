const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const generateTeamPage = require('./src/templates')

const inquirer = require('inquirer');
const fs = require('fs');

teamArray = [];

const addManager = () => {
 return inquirer
    .prompt([{
        type: 'input',
        message: 'What is the NAME of the Manager?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is the ID of the Manager',
        name: 'id',
      },
      {
        type: 'input',
        message: 'What is the EMAIL of the Mananger',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What is the OFFICE NUMBER of the Mananger',
        name: 'officeNumber',
      },
    ])
    .then((data => {
      data.role = 'Manager'
      const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
      teamArray.push(manager);
      console.log(teamArray)
      addEmployee();
    }));
}
const addEmployee = () => {
  return inquirer.prompt([{
      type: 'list',
      message: 'What team member would you like to add next?',
      choices: ['Engineer', 'Intern', 'None'],
      name: 'employee'
    }])
    .then(data => {
      if (data.employee=== 'Engineer') {
        addEngineer();
      } else if (data.employee === 'Intern') {
        addIntern();
      } else {
        console.log('asdfasd', teamArray)
        return teamArray;
      }
    })
}


const addEngineer = () => {
  return inquirer
    .prompt([{
        type: 'input',
        message: 'What is the NAME of the Engineer?',
        name: 'name',

      },
      {
        type: 'input',
        message: 'What is the ID of the Engineer',
        name: 'id',
      },
      {
        type: 'input',
        message: 'What is the EMAIL of the Engineer',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What is the GITHUB USERNAME of the Engineer',
        name: 'github',
      },
    ])
    .then((data => {
      data.role = 'Engineer'
      const engineer = new Engineer(data.name, data.id, data.email, data.github);
      teamArray.push(engineer);
      console.log(teamArray)
      addEmployee();
    }));
}

const addIntern = () => {
  return inquirer
    .prompt([{
        type: 'input',
        message: 'What is the NAME of the Intern?',
        name: 'name',

      },
      {
        type: 'input',
        message: 'What is the ID of the Intern',
        name: 'id',
      },
      {
        type: 'input',
        message: 'What is the EMAIL of the Intern',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What is the School of the Intern',
        name: 'school',
      },
    ])
    .then((data => {
      data.role = 'Intern'
      const intern = new Intern(data.name, data.id, data.email, data.school);
      teamArray.push(intern);
      console.log(teamArray)
      addEmployee();
    }));
}

const generatePage = (data) => {

  fs.writeFile('./index.html', data, (err) =>
    err ? console.log(err) : console.log('Successfully Created Team'))
}



addManager()
  .then(teamArray => {
    console.log('test',teamArray)
    return generateTeamPage(teamArray);
  })
  .then(data =>{
     return generatePage(data);
  })
  .catch(err => {
    console.log(err);
  })

