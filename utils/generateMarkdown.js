// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "APACHE"){
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  if (license === "MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  if (license === "MOZILLA"){
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "APACHE"){
    return "[Apache](https://opensource.org/licenses/Apache-2.0)"
  }
  if (license === "MIT"){
    return "[MIT](https://opensource.org/licenses/MIT)"
  }
  if (license === "MOZILLA"){
    return "[Mozilla](https://opensource.org/licenses/MPL-2.0)"
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // choices: ["APACHE", "MIT", "MOZILLA", "NONE"]
  if(license === "NONE"){
    return "";
  }
  else {
    return `##license
    This application is licensed under ${renderLicenseLink(license)}.
    ${renderLicenseBadge(license)}

    `
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ##table of content
  [description](#description)
  [usage](#usage)
  [installation](#installation)
  [license](#license)

  ##description
  ${data.description}

  ##usage
  ${data.usage}

  ##installation
  ${data.installation}

  ${renderLicenseSection(data.license)}

`;
};

module.exports = generateMarkdown;
