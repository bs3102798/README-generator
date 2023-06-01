// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== "none") {
      return `![Github license](https://ing.shields.io/badge/license-${license}-yellowgreen-svg)`;
    }
    return "";
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license !== "none") {
      return `\n* [License](#license)\n`;
    }
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license !== "none") {
      return `## License
      
      licensed under ${license} license.`;
    }
    return "";
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
    by ${data.title}
    ${renderLicenseBadge(data.license)}
  ##Table of Contents 
  *[description](description)d
  *[installation](installation)
  *[usageInformation](usageInformation)
  *[contribution](contribution)
  *[guidelines](guidelines)
  *[ContactInfo](ContactInfo)
  *[testInstructions](testInstructions)
  *[licenses](licenses)
  ${renderLicenseLink(data.license)}
  ##Description
  ${data.description}
  ##Installation
  ${data.installation}
  ##UsageInfrmaion
  ${data.usageInfromation}
  ##Contribution
  ${data.contribution}
  ##Guidelines
  ${data.guidelines}
  ##Contact Information
  *Name-${data.Name}
  *Email-${data.emailAddress}
  *GitHub-${data.GitHub}
  ## Testing
  ${data.testInstructions}
  ## Licenses
  ${data.license}
  ${renderLicenseSection(data.license)}
  
    `;
  }
  
  module.exports= generateMarkdown;