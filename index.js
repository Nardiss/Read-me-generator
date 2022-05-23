// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs")
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is you github username?",
  },
  {
    type: "input",
    name: "description",
    message: "Please write short description of your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "installation",
    message: "How can you install the dependencies for this project?",
    default: "npm i"
  },
  {
    type: "list",
    name: "license",
    message: "What is the license for this project?",
    choices: ["APACHE", "MIT", "MOZILLA", "NONE"]
  }, 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
 return fs.writeFileSync( fileName, data )

};

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers);
      var markdown = generateMarkdown(answers)
      console.log(markdown)
      writeToFile("./README.md", generateMarkdown(answers));
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
};

// Function call to initialize app
init();
