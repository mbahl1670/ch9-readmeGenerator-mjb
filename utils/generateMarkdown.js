// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  } 
  return `![LicenseBadge](https://img.shields.io/badge/License-${license}-brightgreen)`;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}
// https://choosealicense.com/licenses/mit/
// https://choosealicense.com/licenses/apache-2.0/
// https://choosealicense.com/licenses/gpl-3.0/
// https://choosealicense.com/licenses/bsd-3-clause/

// Table of Contents Functions
const tcInstallation = install => {
  if (!install) {
    return "";
  } else {
    return `* [Installation](#installation)`;
  }
}

const tcUsage = usage => {
  if (!usage) {
    return "";
  } else {
    return `* [Usage](#usage)`;
  }
}

const tcContribution = contribution => {
  if (!contribution) {
    return "";
  } else {
    return `* [Contribution Guidelines](#contriubtion guidelines)`;
  }
}

const tcTests = tests => {
  if (!tests) {
    return "";
  } else {
    return `* [Tests](#tests)`;
  }
}


// Section functions, create the section if info is there
function renderInstallationSection(install) {
  if (!install) {
    return "";
  } else {
    return `## Installation
${install}`;
  }
};

function renderUsageSection(usage) {
  if (!usage) {
    return "";
  } else {
    return `## Usage
${usage}`;
  }
};

function renderContributionSection(contribution) {
  if (!contribution) {
    return "";
  } else {
    return `## Contribution Guidelines
${contribution}`;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {};

function renderTestSection(tests) {
  if (!tests) {
    return "";
  } else {
    return `## Tests
${tests}`;
  }
};




// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { license, description, install, usage, contribute, tests, ...questions } = data;

  return `
${renderLicenseBadge(license)}

# ${data.title}
  
## Description
${description}
  
## Table of Contents
${tcInstallation(install)}
${tcUsage(usage)}
* [License](#license)
${tcContribution(contribute)}
${tcTests(tests)}
* [Questions](#questions)

${renderInstallationSection(install)}
  
${renderUsageSection(usage)}
  
## License
${renderLicenseSection(license)}
  
${renderContributionSection(contribute)}
  
${renderTestSection(tests)}
  
## Questions
`;
}

module.exports = generateMarkdown;
