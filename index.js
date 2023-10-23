//the list of required dependencies
//this one is for the file system
const fs = require('fs');
//this one is for the inquirer which handles the user questions
const inquirer = require('inquirer');

const { circle, triangle, square } = require('./lib/shapes.js')
const { createLOGO } = require('./lib/svgGenerator.js'); // this is reaqireing the svgGenerator.js file to get the function from there

// Prompt the user for input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters: ',
      validate: (input) => input.length <= 3, //this makes it so the user cant input more than 3 characters
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (keyword or hex code): ',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape I know there should be more: ',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (keyword or hex code): ',
    },
  ])
  //this is the function that takes the content and makes an .svg file
  .then((answers) => {
    // Generate the SVG content
    const svgContent = createLOGO(answers);
  
    // Write the SVG content to a file
    fs.writeFileSync('logo.svg', svgContent);
//generates a message "Generated logo.svg!" once the process is finished and the logo is made
    console.log('Now you gota plain ass logo! :-)');
  });
