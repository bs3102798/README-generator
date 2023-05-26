// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer= require('inquirer');
const generateMarkdown= require('./utils/generateMarkdown');
const utils = require('utils');
const { error } = require('console');
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your repository? (Needed)',
},
{
    type: 'input',
    name: 'description',
    message: 'what is the description of the repository? (Needed)',
},
{
    type: 'input',
    name: 'installation',
    message: '',
},
{
    type: 'input',
    name: 'usageInformation',
    message: 'Do you want to give instructions for the application?',
},
{
    type: 'input',
    name: 'contribution',
    message: 'Do you want to give permission for other Developers to this repository?',
},
{
    type: 'input',
    name: 'guidelines',
    message: '',
},
{
    type: 'input',
    name: 'testInstructions',
    message: 'How would you like other to test your application?',
},
{
    type: 'checkbox',
    name: 'license',
    message: 'which license did you want to use?',
    choices: [
        'GNU APLv3',
        'GNU GPLv3',
        'GNU LGPLv3',
        'Mozilla Public License 2.0',
        'Apache License 2.0',
        'MIT License',
        'Boost Software License 1.0',
        'The Unlicense',
    ],
    // validate: nameInput => {
    //     if (nameInput) {
    //         return true;
    //     } else {
    //         console.log('We need a proper license. (This is spelling sensitive)');
    //         return false;
    //     }
    // }
},
{
    type: 'input',
    name: 'GitHub',
    message: 'what is you GitHub userName (Needed)?',
},
{
    type: 'input',
    name: 'emailAddress',
    message: 'What is your personal or professional email address (Needed)?',
},
{
    type: 'input',
    name: 'Name',
    message: 'What is your name?',
},
]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,error => {
        if (error){
            return console.log('Sorry there was an error : ' + error);
        }
    })

}
//const createReadme = util.promisify(writeToFile)
// TODO: Create a function to initialize app
function init() {
    prompt(questions).then((reponse) => {
        console.log("making the readme...");
        writeToFile("./dist/README.md", generateMarkdown({ ...reponse }));
    })



}

// Function call to initialize app
init();

