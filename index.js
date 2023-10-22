const fs = require('fs');
const inquirer = require('inquirer');
const { circle, triangle, square } = require('./lib/shapes.js')
const { createSVG } = require('./lib/svgGenerator.js'); // this is reaqireing the svgGenerator.js file to get the function from there

// Prompt the user for input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters: ',
      validate: (input) => input.length <= 3,
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (keyword or hex code): ',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape: ',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (keyword or hex code): ',
    },
  ])
  .then((answers) => {
    // Generate the SVG content
    const svgContent = createSVG(answers);

    // Write the SVG content to a file
    fs.writeFileSync('logo.svg', svgContent);

    console.log('Generated logo.svg');
  });
