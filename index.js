//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const questions = require("./data/questions");


//Create a function to write README file
const writeToFile = (fileName, data) => fs.writeFile(fileName, data, err => err ? console.error(err) : console.log('Success!'));

const useInquirer = () => 
  inquirer
    .prompt(questions)
    .then(answers => answers)
    .catch(error => 
      error.isTtyError ? 
      console.error(error.isTtyError) : 
      console.error(error)
      );

//Create a function to initialize app
const init = async () => writeToFile("README.md", generateMarkdown(await useInquirer()));

// Function call to initialize app
init();
