const fs = require('fs');
const inquirer = require('inquirer');
const { circle, triangle, square } = require('./lib/shapes.js')
const { createSVG } = require('./lib/svgGenerator.js'); // this is reaqireing the svgGenerator.js file to get the function from there

