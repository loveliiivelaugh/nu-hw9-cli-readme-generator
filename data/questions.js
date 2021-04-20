//Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  },
  {
    type: 'input',
    name: 'title',
    message: "What is your project's name?",
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project?'
  },
  {
    type: 'rawlist',
    name: 'license',
    message: "What kind of license should your project have?",
    choices: ["Open", "MIT", "None", "IDK"]
  },
  {
    type: 'input',
    name: 'installing_dependencies',
    message: "What command should be run to install dependencies?",
  },
  {
    type: 'input',
    name: 'tests',
    message: "What command should be run to run tests?",
  },
  {
    type: 'input',
    name: 'additional_info',
    message: "What does the user need to know about using the repo?",
  },
  {
    type: 'input',
    name: 'contributing',
    message: "What does the user need to know about contributing to the repo?",
  },
];

module.exports = questions;