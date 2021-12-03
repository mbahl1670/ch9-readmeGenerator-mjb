// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}
// https://img.shields.io/badge/License-<<<<<<<MIT>>>>>>-yellowgreen

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}
// https://choosealicense.com/licenses/mit/
// https://choosealicense.com/licenses/apache-2.0/
// https://choosealicense.com/licenses/gpl-3.0/
// https://choosealicense.com/licenses/bsd-3-clause/


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
![LicenseBadge](https://img.shields.io/badge/License-${data.license}-brightgreen)

# ${data.title}
  
## Description
  
## Table of Contents
  
## Installation
  
## Usage
  
## License
  
## Contributing
  
## Tests
  
## Questions
`;
}

module.exports = generateMarkdown;
