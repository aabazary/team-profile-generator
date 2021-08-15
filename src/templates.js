const managerCard = (Manager) =>
    `<li class="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
<div class="space-y-6 xl:space-y-10">
  <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src="./images/${Manager}.png" alt="">
  <div class="space-y-2 xl:flex xl:items-center xl:justify-between">
    <div class="font-medium text-lg leading-6 space-y-1">
      <h3 class="text-white">${Manager.name}(ID:${Manager.id})</h3>
      <p class="text-white">${Manager.officeNumber}</p>
    </div>

    <ul class="flex justify-center space-x-5">
    <li>
    <a href='mailto:${Manager.email}'
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
</li> `

const engineerCard = (Engineer) =>
    `<li class="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
<div class="space-y-6 xl:space-y-10">
  <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src="./images/${Engineer}.png" alt="">
  <div class="space-y-2 xl:flex xl:items-center xl:justify-between">
    <div class="font-medium text-lg leading-6 space-y-1">
      <h3 class="text-white">${Engineer.name}(ID:${Engineer.id})</h3>
      <p class="text-white">${Engineer.officeNumber}</p>
    </div>

    <ul class="flex justify-center space-x-5">
    <li>
    <a href='mailto:${Engineer.email}'
    class="text-gray-400 hover:text-gray-300">
      <span class="sr-only">Mail</span>
      <svg class="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    </a>
    </li>
    <li>
    <a href="github.com/${Engineer.github}" class="text-gray-400 hover:text-gray-300">
    <span class="sr-only">GitHub</span>
    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
    </svg>
    </a>
    </li>
    </ul>
  </div>
</div>
</li> `

const internCard = (Intern) =>
    `<li class="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
<div class="space-y-6 xl:space-y-10">
  <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src="./images/${Intern}.png" alt="">
  <div class="space-y-2 xl:flex xl:items-center xl:justify-between">
    <div class="font-medium text-lg leading-6 space-y-1">
      <h3 class="text-white">${Intern.name}(ID:${Intern.id})</h3>
      <p class="text-white">${Intern.school}</p>
    </div>

    <ul class="flex justify-center space-x-5">
    <li>
    <a href='mailto:${Intern.email}'
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
</li> `

generateTeamPage = (data) => {
    console.log(data)

    cardsArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerHtml = managerCard(employee);
            cardsArray.push(managerHtml);
        } else if (role === 'Engineer') {
            const engineerHtml = engineerCard(employee);
            cardsArray.push(engineerHtml);
        } else if (role === 'Intern') {
            const internHtml = internCard(employee);
            cardsArray.push(internHtml);
        }
    }
    const teamCards = cardsArray.join('');
    const createPage = htmlTemplate(teamCards);
    return createPage;
};

const htmlTemplate = (teamCards) =>
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
      
      <!-- People Go Here -->
    ${teamCards}
      </ul>
    </div>
  </div>
</div>
// </body>
// <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// </html>
// `




module.exports = generateTeamPage;