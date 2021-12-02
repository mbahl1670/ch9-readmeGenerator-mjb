// const cheater = {
//     title: "Meimify",
//     description: "Memeify improves upon the preexisting gif search applications(such as giphy) and adds another layer of depth to assist with user simplicity. When searching for a single word, Memeify automatically searches and returns synonyms to help give you the best variety to choose from. Can’t think of the exact word you’re looking for? Through our built in thesaurus function, you can quickly and easily find the gif that perfectly suits your needs as a hip and happening person navigating the cyberspace today. ",
//     username: "mbahl1670",
//     email: "mbahl1670@gmail.com",
//     install: 'go to "https://mbahl1670.github.io/ch7-groupProject1-MBSSWL/"',
//     usage: "Type in a word/noun that you want get a synonym for and click memeify button.  Once a search history is created after the first search you can repeat the search by clickin on it's button in the history.  Clear the search history with the clear button",
//     contributionGuidelines: "Feel free to fork the reposity and work on current issues",
//     tets: "none",
//     license: "MIT"
// };

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
        message: "Please enter your gitHub username:",
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
        //none, MIT, Apache, GPL 3.0, BSD 3
        // MIT, ISC = use my source code , do whatever you want , add notice in your product
        // Apache 2 lays down the grant of patent rights explicity while using modifying or distributing
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
    // .then( questionAnswers => { return generateMarkdown(questionAnswers)})
    // .then( readmeData => {writeToFile("README.md", readmeData)});