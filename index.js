// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const { title } = require("process");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Title of the README file: (required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter a title for the file!")
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description of your app: (required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter a description for your app!")
            }
        }
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your gitHub username: (required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your gitHub username!")
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address:"
    },
    {
        type: "input",
        name: "install",
        message: "Installation instructions for your app:"
    },
    {
        type: "input",
        name: "usage",
        message: "Instructions and examples of how to use the app:"
    },
    {
        type: "input",
        name: "contributionGuidelines",
        message: "Contribution guidelines for the app:"
    },
    {
        type: "input",
        name: "tests",
        message: "Tests for the application and/or examples of how to use them:"
    },
    {
        type: "list",
        name: "license",
        message: "Pick a license or choose to have none:",
        choices: ["None", "MIT", "Apache", "GPL 3.0", "BSD 3"]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw err;
        console.log("README complete!  Checkout out README.md to see the output");
    });
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
};

// Function call to initialize app
init()
    .then(generateMarkdown)
    .then(readMeData => {
        writeToFile("./dist/README.md", readMeData);
    });
