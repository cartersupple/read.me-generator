// node modules
const fs = require('fs');
const inquirer = require('inquirer');

// link to where the read.me page will generate
const makeReadMe = require('makeReadMe.js')

// make questions for inputs
const inputs = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username as it appears on your account.',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('A value is needed to continue.');
                    return false; 
                }
            } 
        },
        {
            type: 'input',
            name:'email',
            message: 'Enter your email as it appears on your account.',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('A value is needed to continue.');
                    return false; 
                }
            } 
        },
        {
            type:'input',
            name:'project name',
            message:'Enter a name for your project.',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('A value is needed to continue.');
                    return false; 
                }
            } 
        },
        {
            type: 'input',
            name:'description',
            message:'Enter a description for your project.',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('A value is needed to continue.');
                    return false; 
                }
            } 
        },
        {
            type: 'list',
            name:'license',
            message:'Select the license for your project.',
            choices: [ 
            'Apache',
            'Academic',
            'GNU',
            'ISC',
            'MIT',
            'Mozilla',
            'Open'],
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('A value is needed to continue.');
                    return false; 
                }
            } 
        },
        {
            type: 'input',
            name: 'installation',
            message:'Write steps to install project.',
        },
        {
            type:'input',
            name:'usage',
            message:'Write purpose of application.',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('A value is needed to continue.');
                    return false; 
                }
            } 
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Write name of contributors if any.',
        },
        {
            type:'input',
            name:'tests',
            message:'Write steps of a test.',
        }
    ]);
};

