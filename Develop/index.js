// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("../utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    inquirer
        .prompt([
            {type: 'input',
            message: 'What is your Github username?',
            name: 'github',
            },
            {type: 'input',
            message: 'What is your email address?',
            name: 'email',                
            },
            {type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
            },
            {type: 'input',
            message: 'Please write a short description of your project',
            name: 'description',
            },
            {type: 'input',
            message: 'What command should be run to install dependencies?',
            name: 'install: ',
            },
            {type: 'input',
            message: 'What does the reader need to know about using the repo?',
            name: 'usefaq: ',
            },
            {type: 'list',
            message: 'What kind of license should your project have?',
            name: 'license',
            choices: ['Apache 2.0, None']
            },
            {type: 'input',
            message: 'How can someone contribute to your code?',
            name: 'contributions: ',
            },
            {type: 'input',
            message:'What command should be run to run tests?',
            name: 'test',
            },
            {type: 'input',
            message: 'How can user contact you if they have  questions?',
            name: 'If you have questions, please contact me at ',
            },
            
        ])
        .then((data) => {
    const filename = `${data.title}.md`;
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
