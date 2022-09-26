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
        ])
        .then((data) =>
        fs.writeFile(`README.md`, JSON.stringify(data), (err) =>
            err ? console.error(err) : console.log('Success!' + JSON.stringify(data)) 
        )
        )
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
