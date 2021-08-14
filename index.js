const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const inquirer = require('inquirer');

let manager = new Manager('Ashkon', '7', 'aabazary@gmail.com', '867-5309' );

console.log(manager.getName());
console.log(manager.getId());
console.log(manager.getEmail());
console.log(manager.getRole());
console.log(manager.getOfficeNumber());