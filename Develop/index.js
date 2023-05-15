// TODO: Include packages needed for this application

const { fstat } = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;


// TODO: Create an array of questions for user input
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
          message: 'Provide a short description of your project.',
        },
        {
          type: 'input',
          name: 'install',
          message: 'Which command should be run to install dependencies?',
        },
        {
          type: 'input',
          name: 'usage',
          message: 'Provide examples for usage.',
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Which license will you be using?',
            choices: [
                'MIT License',
                'Apache License 2.0',
                'GNU General Public License',
                'Berkeley Software Distribution License',
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
            message: 'Which command should be run for tests?',
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
        
};

// TODO: Create a function to initialize app
function init() {
    questions()
    .then((answers) => writeFile('sampleREADME.md', generateMarkdown(answers)))
    .then(() => console.log('README successfully created'))
    .catch((err) => console.error(err))
};

// Function call to initialize app
init();
