// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  } else if (license === "GPL 3.0") {
    return `![LicenseBadge](https://img.shields.io/badge/License-GPL%203.0-brightgreen)`;
  } else if (license === "BSD 3") {
    return `![LicenseBadge](https://img.shields.io/badge/License-BSD%203-brightgreen)`;
  } else {
    return `![LicenseBadge](https://img.shields.io/badge/License-${license}-brightgreen)`;
  }
};

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
    return `* [Contribution Guidelines](#contribution-guidelines)`;
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

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  switch (license) {
    case "None": return `https://choosealicense.com/no-permission/`;
    case "MIT": return `https://choosealicense.com/licenses/mit/`;
    case "Apache": return `https://choosealicense.com/licenses/apache-2.0/`;
    case "GPL 3.0": return `https://choosealicense.com/licenses/gpl-3.0/`;
    case "BSD 3": return `https://choosealicense.com/licenses/bsd-3-clause/`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string - I changed this to include a description of what no-license means
function renderLicenseSection(license) {
  const licenseLink = renderLicenseLink(license);
  if (license === "None") {
    return `This project does not have a license associated with it.\n
Click [here](${licenseLink}) for more information.`;
  } else {
    return `This project is licensed under the [${license}](${licenseLink}) license.\n
Click the license name for a description of this type of license`;
  }
};

function renderTestSection(tests) {
  if (!tests) {
    return "";
  } else {
    return `## Tests
${tests}`;
  }
};

function renderEmail(email) {
  if (!email) {
    return "";
  } else {
    return `Please email me if you have any questions:  <${email}>`;
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
Find me on GitHub:  [${questions.username}](https://github.com/${questions.username})\n
${renderEmail(questions.email)}
`;
}

module.exports = generateMarkdown;
