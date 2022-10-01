// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## Project Title
  ## ${data.title}
  ${data.getLicense}
  
  ## Table of Contents
  * [Description](#description)
  * [Usage](#usefaq)
  * [Installation](#install)
  * [Testing](#test)
  * [License](#license)
  * [Contributing to this Repo](#contributing)
  * [Questions / Contact Details](#questions)
  
  <a name = 'description'></a>
  ## Description
  ${data.description}

  <a name = 'usefaq'></a>
  ## Usage
  ${data.usefaq}

  <a name = 'install'></a>
  ## Installation
  ${data.install}

  <a name = 'test'></a>
  ## Testing
  ${data.test}

  <a name = 'license'></a>
  ## License
  The application is covered under a ${data.license} license.

  <a name = 'contributing'></a>
  ## Contributing to this Repo
  ${data.contributing}

  <a name = 'questions'></a>
  ## Questions / Contact Details
  This app can be found on my github page at (https://github.com/${data.github}).
  ${data.github}

  If you have any questions or need to contact me about this app, I can be reached on Github or by email at [${data.email}](${data.email})
`;
}

module.exports = generateMarkdown;
