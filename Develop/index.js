// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("../utils/generateMarkdown");

function getLicense(value) {
    if (value === "GNU AGPLv3") {
        return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
    } else if (value === "GNU GPLv3") {
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (value === "GNU LGPLv3") {
        return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
    } else if (value === "Apache 2.0") {
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (value === "Boost Software 1.0") {
        return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    } else if (value === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else {
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    }
}

// TODO: Create an array of questions for user input
const questions = [
    
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
            name: 'install',
            },
            {type: 'input',
            message: 'What does the reader need to know about using the repo?',
            name: 'usefaq',
            },
            {
                type: "list",
                name: "license",
                message: "Please select a license for this project.",
                choices: [
                    "GNU AGPLv3",
                    "GNU GPLv3",
                    "GNU LGPLv3",
                    "Apache 2.0",
                    "Boost Software 1.0",
                    "MIT",
                    "Mozilla",
                ],
            },
            {type: 'input',
            message: 'How can someone contribute to your code?',
            name: 'contributing',
            },
            {type: 'input',
            message:'What command should be run to run tests?',
            name: 'test',
            },
            {type: 'input',
            message: 'How can user contact you if they have  questions?',
            name: 'questions',
            },
    ]
       
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log("success!")
)};

// TODO: Create a function to initialize app
function init() {
        inquirer.prompt(questions).then((data) => {
            console.log(JSON.stringify(data, null, " "));
            data.getLicense = getLicense(data.license);
            writeToFile(`${data.title}.md`, data);
        });
    } 


// Function call to initialize app
init();
