const axios = require('axios');
//extra
const getGitHubUserData = async username => {
  const url = `https://api.github.com/users/${username}`;
  await axios.get(url)
    .then(response => response.data)
    .catch(exception => console.error(exception));
};


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => null;

// TODO: Create a const that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => null;

// TODO: Create a const that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => null;

// TODO: Create a function to generate markdown for README
const generateMarkdown = async data => {
  const gitHubData = await getGitHubUserData(data.username);
  
  // const licenseProps = {
  //   badge: renderLicenseBadge(license),
  //   link: renderLicenseLink(license),
  //   section: renderLicenseSection(license)
  // };
  const tableOfContents = []
  data.forEach(question => tableOfContents.push(question.name));

  console.log(data, gitHubData);
  return `
# ${data.title}

## Description

${data.description}

${data.screenshots && `
## Screenshots

![${data.screenshot1.name}](${data.screenshot1.url})

![${data.screenshot2.name}](${data.screenshot2.url})
`}

${data.gif && `
## Demo

![${data.gif.name}](${data.gif.url})
`}

${tableOfContents.length > 0 && `
## Table of Contents
${tableOfContents.map(item => `
* ![${item}](#${item})

`)}
`}

## Installation

${data.installing_dependencies}

## Usage

${data.additional_info}

## Credits

## License

${renderLicenseLink(data.license)}

${renderLicenseSection(data.license)}

${renderLicenseBadge(data.license)}

## Badges

## Features

## How to Contribute

${data.contributing}

## Tests

${data.tests}

`;
};

module.exports = generateMarkdown;