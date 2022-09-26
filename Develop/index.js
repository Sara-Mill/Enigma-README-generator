// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('../utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    inquirer
        .prompt([
            {type: 'input',
            message: 'What is your GitHub URL?',
            name: 'GitHub',
            },
            {type: 'input',
            message: 'What is the title of your project?',
            name: 'Project Title',
            },
        ])
        .then((data) => {
    const filename = `${data.name}.md`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
        })
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
