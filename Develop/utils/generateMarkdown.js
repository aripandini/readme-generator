// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, install, usage, license, contribution, test, github, email}) {
  return `#${title}
  
  ## Description

  ${description}

  ## Table of Contents 

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation

  ${install}

  ## Usage

  ${usage}

  ## License

 This project is licensed under ${license}.

  ## Contributing
  
  ${contribution}

  ## Tests

  ${test}

  ## Questions
  
  Please reach out with any questions you might have! 

  - [GitHub Profile](https://github.com/${github})
  - Email: ${email}
  `;
}

module.exports = generateMarkdown;
