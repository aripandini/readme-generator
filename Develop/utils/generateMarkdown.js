// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadgeLink(license) {
  if (license === 'MIT License') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache License 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GNU General Public License v3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'Boost Software License') {
    return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'Unlicensed') {
    licenseBadgeLink = '';

    for (var i = 0; i < license.length; i++) {
      licenseBadgeLink += renderLicenseBadgeLink(license[i]);
    }

    return `This project is licensed under ${license}. To read more: ` + '\n\n' + licenseBadgeLink;  
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, install, usage, license, contribution, test, github, email}) {
  return `# ${title}

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

  ${renderLicenseSection(license)}

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
