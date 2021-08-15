const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const inquirer = require('inquirer');
const fs = require('fs');

const addManager = () => {
    inquirer
        .prompt([{
                type: 'list',
                message: 'Select Manadatory Role',
                name: 'role',
                choices:['Manager']
            },
            {
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
            {
                type: 'list',
                message: 'What team member would you like to add next?',
                choices: ['Engineer', 'Intern', 'None'],
                name: 'nextChoice'
            }
        ])
        .then((data => {
            const pageContent = generatePage(data);

            fs.writeFile('./index.html', pageContent, (err) =>
                err ? console.log(err) : console.log('Successfully Created Team'))
        }));
}



const generatePage = (data) =>
    `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    <title></title>
</head>
<body>
    <!-- This example requires Tailwind CSS v2.0+ -->
<div class="bg-gray-900">
  <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
    <div class="space-y-12">
      <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
        <h2 class="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">Meet our team</h2>
        <p class="text-xl text-gray-300">Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet lectus sit pretium egestas vel mattis neque.</p>
      </div>
      <ul class="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
      <li class="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
<div class="space-y-6 xl:space-y-10">
  <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src="./images/${data.role}.png" alt="">
  <div class="space-y-2 xl:flex xl:items-center xl:justify-between">
    <div class="font-medium text-lg leading-6 space-y-1">
      <h3 class="text-white">${data.name}(ID:${data.id})</h3>
      <p class="text-indigo-400">${data.role}</p>
      <p class="text-white">${data.officeNumber}</p>
    </div>

    <ul class="flex justify-center space-x-5">
    <li>
    <a href='mailto:${data.email}'
    class="text-gray-400 hover:text-gray-300">
      <span class="sr-only">Mail</span>
      <svg class="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    </a>
    </li>
    </ul>
  </div>
</div>
</li>     
      <!-- People Go Here -->
        
      </ul>
    </div>
  </div>
</div>

  
</body>
<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
</html>`





addManager(

)


// <a href="#" class="text-gray-400 hover:text-gray-300">
// <span class="sr-only">GitHub</span>
// <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//   <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
// </svg>
// </a>
