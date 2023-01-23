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

function renderLicenseLink(license) {
  if (!license) {
    return "";
  }
  license = license.toLowerCase();
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
//adding a section to table of content
function addSectionToTableOfContent(data, sectionText) {
  let text = "";
  if (data) {
    linkText = sectionText.replace(" ", "-").toLowerCase(); //replacing space by - , and converting intolowercase//
    text = `[${sectionText}](#${linkText})`;
  }
  return text;
}

// adding a table of content
function renderTableOfContent(data) {
  let tableOfContents = `## Table Of Contents
  
${addSectionToTableOfContent(data.description, "Description")}

${addSectionToTableOfContent(data.installation, "Installation")}

${addSectionToTableOfContent(data.usuage, "Usuage Information")}

${addSectionToTableOfContent(
  data.contributionGuidelines,
  "Contribution Guidelines"
)}

${addSectionToTableOfContent(data.test, "Test Instructions")}

${addSectionToTableOfContent(data.githubUsername || data.email, "Questions")}

${addSectionToTableOfContent(data.license, "License")}
  `;
  return tableOfContents;
}

// adding questions section to the readme
function renderQuestionsSection(data) {
  let questionsText = `## Questions`;
  if (data.githubUsername) {
    const githubUrl = `https://github.com/${data.githubUsername}`;
    questionsText = `${questionsText}
  [Github repo](${githubUrl})
    `;
  }

  if (data.email) {
    questionsText = `${questionsText}
  Reach out to me via [Email](mailto:${data.email}) for any questions.
    `;
  }
  return questionsText;
}

// creating a markdown formatted text based on the data provided
function generateMarkdown(data) {
  let mdText;
  mdText = `# ${data.title}

${renderLicenseBadge(data.license)}

${renderTableOfContent(data)}

${renderSection("Description", data.description)}

${renderSection("Installation", data.installation)}

${renderSection("Usuage Information", data.usuage)}

${renderSection("Contribution Guidelines", data.contributionGuidelines)}

${renderSection("Test Instructions", data.test)}

${renderLicenseSection(data.license)}

${renderQuestionsSection(data)}

  `;
  return mdText;
}

module.exports = generateMarkdown;
