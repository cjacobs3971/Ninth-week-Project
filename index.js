const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
const questions = [
  {
    name: 'title',
    type: 'input',
    message: 'Enter the project title:',
  },
  {
    name: 'description',
    type: 'input',
    message: 'Enter a description:',
  },
  {
    name: 'installation',
    type: 'input',
    message: 'Enter installation instructions:',
  },
  {
    name: 'usage',
    type: 'input',
    message: 'Enter usage information:',
  },
  {
    name: 'contributing',
    type: 'input',
    message: 'Enter contribution guidelines:',
  },
  {
    name: 'tests',
    type: 'input',
    message: 'Enter test instructions:',
  },
  {
    name: 'license',
    type: 'list',
    message: 'Choose a license:',
    choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause', 'None'],
  },
  {
    name: 'github',
    type: 'input',
    message: 'Enter your GitHub username:',
  },
  {
    name: 'email',
    type: 'input',
    message: 'Enter your email address:',
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`${fileName} created successfully!`);
    }
  });
}

// Function to initialize app
function init() {
  // Prompt the user for input
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Generate the README content
      const readmeContent = `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is covered under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
If you have any questions, you can reach me through GitHub: [${answers.github}](https://github.com/${answers.github})
Or you can email me at: ${answers.email}
`;

      // Write the README file
      writeToFile('README.md', readmeContent);
    })
    .catch((error) => {
      console.error(error);
    });
}

// Function call to initialize app
init();
