//Note: Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')

//Note: Questions for the readme generator
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How can someone use your project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to use for your project?',
        choices: ['MIT', 'GPLv3', 'No license']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to your project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Are there any tests included in your project?'
    },
    //Note: Information for the questions section
    {
        type: 'input',
        name: 'email',
        message: 'Provide a valid e-mail so people can contact you if they have any questions.'
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'Provide your GitHub username so people can contact you if they have any questions.'
    },
];

//Note: Writing the README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Note: function to initialize the app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
      const markdownContent = generateMarkdown(answers); // Generate README content
      writeToFile('README.md', markdownContent); // Write to README.md
      console.log('README file generated successfully!');
    })
    .catch((error) => {
      console.error('Error during the inquirer prompt:', error);
    });
}
// Note: Function call to initialize app
init();
