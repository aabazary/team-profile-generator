//importing subclasses and template
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const generateTeamPage = require('./src/templates')
//using inquirer and fs npm
const inquirer = require('inquirer');
const fs = require('fs');
//globally define team Array(blank)
teamArray = [];

//function to initiate team with a mandatory manager
const addManager = () => {
  return inquirer
    //series of questions to create manager object
    .prompt([{
        type: 'input',
        message: 'What is the NAME of the Manager?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is the ID of the Manager?',
        name: 'id',
      },
      {
        type: 'input',
        message: 'What is the EMAIL of the Mananger?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What is the OFFICE NUMBER of the Mananger?',
        name: 'officeNumber',
      },
    ])
    //creating the manager and pushing it to the teamArray, runs function to add another employee
    .then((data => {
      data.role = 'Manager'
      const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
      teamArray.push(manager);
      console.log(`${data.name} is now the Manager of the Team`)
      addEmployee();
    }));
}

//allows choice between adding a new employee(intern or engineer) or complete team(none)
const addEmployee = () => {
  return inquirer.prompt([{
      type: 'list',
      message: 'What team member would you like to add next?',
      choices: ['Engineer', 'Intern', 'None(Team Complete)'],
      name: 'employee'
    }])
    //choice allows the running of addEngineer, addIntern or to complete the app
    .then(data => {
      if (data.employee === 'Engineer') {
        addEngineer();
      } else if (data.employee === 'Intern') {
        addIntern();
      } else {
        // assistance from ask BCS 
        let pageString = generateTeam(teamArray);
        generatePage(pageString)
      }
    })
}

//function adding a optional engineer
const addEngineer = () => {
  return inquirer
    //series of prompts to create engineer object
    .prompt([{
        type: 'input',
        message: 'What is the NAME of the Engineer?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is the ID of the Engineer?',
        name: 'id',
      },
      {
        type: 'input',
        message: 'What is the EMAIL of the Engineer?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What is the GITHUB USERNAME of the Engineer?',
        name: 'github',
      },
    ])
    //creating the engineer and pushing it to the teamArray, runs function to add another employee
    .then((data => {
      data.role = 'Engineer'
      const engineer = new Engineer(data.name, data.id, data.email, data.github);
      teamArray.push(engineer);
      console.log(`${data.name} has been added to the team`);
      addEmployee();
    }));
}
//function adding a optional intern
const addIntern = () => {
  return inquirer
    //series of prompts to create intern object
    .prompt([{
        type: 'input',
        message: 'What is the NAME of the Intern?',
        name: 'name',

      },
      {
        type: 'input',
        message: 'What is the ID of the Intern?',
        name: 'id',
      },
      {
        type: 'input',
        message: 'What is the EMAIL of the Intern?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What is the School of the Intern?',
        name: 'school',
      },
    ])
    //creating the intern and pushing it to the teamArray, runs function to add another employee
    .then((data => {
      data.role = 'Intern'
      const intern = new Intern(data.name, data.id, data.email, data.school);
      teamArray.push(intern);
      console.log(`${data.name} has been added to the team`);
      addEmployee();
    }));
}

//function to create index.html
const generatePage = (pageString) => {

  fs.writeFile('./index.html', pageString, (err) =>
    err ? console.log(err) : console.log('Successfully Created Team'))
}

//running application
addManager()