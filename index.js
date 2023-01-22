const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  {
    type: "input",
    name: "description",
    message: "what is the description of your project? ",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter installation instructions:",
  },
  {
    type: "input",
    name: "usuage",
    message: "Enter project usage information:",
  },
  {
    type: "list",
    name: "license",
    message: "Select a license type for the project:",
    choices: ["MIT", "ISC", "mpl-2.0", "apache-2.0"],
  },
  {
    type: "input",
    name: "contributionGuidelines",
    message: "Enter information about contribution guidelines",
  },
  {
    type: "input",
    name: "test",
    message: "Enter instructions to test the application:",
  },
  {
    type: "input",
    name: "githubUsername",
    message: "Enter your Github username",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your Email address",
  },
];

function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const markdown = generateMarkdown(answers);
      writeToFile("test.md", markdown);
    })
    .catch((err) => {
      console.error(err);
    });
}

// Function call to initialize app
init();
