// Note: Function to create license badge (can add more license options in the future)
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![MIT](https://img.shields.io/badge/License-MIT-purple.svg)`;
  } else 
  if (license === "GPLv3") {
    return `![GPLv3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)`;
  } else
  if (license === "No license") {
  return " ";
  }
}

//Note: function to create license link
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `[MIT](https://opensource.org/licenses/MIT)`;
  } else 
  if (license === "GPLv3") {
    return `[GPLv3](https://opensource.org/license/gpl-3-0)`;
  } else
  if (license === "No license") {
    return " ";
  }
}

// Note: adds license info to license section of readme
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `
    This application is covered under the following license: ${renderLicenseLink(license)} `;
  } else {
    return " ";
  }
}

//Note: Markdown data for the readme file
function generateMarkdown(data) {
    return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [Description](#description)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Description
  ${data.description}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${renderLicenseSection(data.license)}
  ${data.license}
  
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions

  If you have any questions, please contact me by using one of the following links:

  [E-mail: ${data.email}]
  [GitHub: https://github.com/${data.gitHub}]
  `;
}
module.exports = generateMarkdown;