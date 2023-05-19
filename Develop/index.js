const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

const questions = () => {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'title',
          message: 'What is the title of your project?',
        },
        {
          type: 'input',
          name: 'description',
          message: 'Provide a short description of your project:',
        },
        {
          type: 'input',
          name: 'install',
          message: 'Provide installation instructions:',
        },
        {
          type: 'input',
          name: 'usage',
          message: 'Provide examples for usage of your project:',
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Which license will you be using?',
            choices: [
                'MIT License',
                'Apache License 2.0',
                'GNU General Public License v3',
                'Boost Software License'
            ]
        },
        {
          type: 'input',
          name: 'contribution',
          message: 'How can others collaborate with this project?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'How can your project be tested?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Provide your Github profile.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Provide your email.',
          },
      ]);
};

function init() {
    questions()
    .then((answers) => writeFile('./sampleREADME/README.md', generateMarkdown(answers)))
    .then(() => console.log('README successfully created'))
    .catch((err) => console.error(err))
};

init();
