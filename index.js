const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const inquirer = require('inquirer');
const fs = require('fs');

// const manager = new Manager('Ashkon', '7', 'aabazary@gmail.com', '867-5309' );

// console.log(manager.getName());
// console.log(manager.getId());
// console.log(manager.getEmail());
// console.log(manager.getRole());
// console.log(manager.getOfficeNumber());

const addManager = () => {
    inquirer
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
        .then((data =>{
            const pageContent = generatePage(data);

            fs.writeFile('./index.html', pageContent, (err) =>
            err ? console.log(err) : console.log('Successfully Created Team'))
        }));
}

const generatePage = (data) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    <title></title>
</head>
<body>
    <div class="min-h-screen bg-gray-500 py-6 flex flex-col justify-center sm:py-12">
        <div class="flex space-x-4 px-4 justify-around">

          <div class="bg-gradient-to-t from-black via-pink-900 to-pink-700  h-72 w-28 md:w-96 md:rounded-3xl rounded-full shadow-md relative flex flex-col items-center justify-between md:items-start py-5 md:p-5 transition-all duration-150">

            <img class="" src="" alt="" />
      

            <div class="transform -rotate-90 md:rotate-0 align-middle text-2xl font-semibold text-gray-200 text-center m-auto md:m-0 md:mt-8">${data.name}</div>
            <ul class="text-lg text-gray-300 font-light hidden md:block">
              <li>${data.id}</li>
              <li>${data.email}</li>
              <li>${data.officeNumber}</li>
            </ul>
    
          </div>
        </div>
      </div>
    
</body>
</html>`

   

addManager(

)