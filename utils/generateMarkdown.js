function renderLicenseBadge(license) {
  const badges = {
    MIT: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
    ISC: `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`,
    "mpl-2.0": `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`,
    "apache-2.0": `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
  };
  if (!license) {
    return "";
  }
  return badges[license];
}

function renderSection(sectionName, data) {
  if (!data) {
    return "";
  }
  const text = `## ${sectionName}

${data}`;
  return text;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }
  const licenseLink = `https://choosealicense.com/licenses/${license}`;
  return licenseLink;
}

function renderLicenseSection(license) {
  if (!license) {
    return "";
  }
  const licenseText = `Licensed under the [${license}](${renderLicenseLink(
    license
  )}) license`;
  return renderSection("License", licenseText);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let mdText;
  mdText = `# ${data.title}

${renderLicenseBadge(data.license)}

${renderSection("Description", data.description)}

${renderSection("Installation", data.installation)}

${renderSection("Usage Information", data.usuage)}

${renderSection("Contribution Guidelines", data.contributionGuidelines)}

${renderSection("Test Instructions", data.test)}

${renderLicenseSection(data.license)}
  `;

  return mdText;
}

module.exports = generateMarkdown;
