// function to fill in read.me with user inputs
const generatedReadMe = data => {
    return `# ${data.title}
    ![Github licence](http://img.shields.io/badge/license-${data.license}-blue.svg)
## Description 
    ${data.description}
## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    
## Installation 
    ${data.installation}
## Usage 
    ${data.usage}
## License 
    This project is license under ${data.license}
## Contributing 
    ${data.contributors}
## Tests
    ${data.tests}
## Questions
    If you have any questions about this projects, please contact me directly at ${data.email}. You can view more of my projects at https://github.com/${data.github}.
  `;
  }
  
  
  // use for importing Markdown in index 
  module.exports = generatedReadMe;