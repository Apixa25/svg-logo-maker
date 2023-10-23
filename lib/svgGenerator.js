const { createSVG } = require('./lib/svgGenerator.js');
function createSVG({ text, textColor, shape, shapeColor }) {
    
    let shapeSVG = '';
  // Determine the shape and create the corresponding SVG
  if (shape === 'square') {
    shapeSVG = `<rect width="100" height="100" fill="${shapeColor}" />`;
  } else if (shape === 'circle') {
    shapeSVG = `<circle cx="50" cy="50" r="50" fill="${shapeColor}" />`;
  } else if (shape === 'triangle') {
    shapeSVG = `
      <polygon points="50,10 10,90 90,90" fill="${shapeColor}" />
    `;
  }
    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect width="100%" height="100%" fill="${shapeColor}" />
        <text x="50%" y="50%" font-size="48" text-anchor="middle" fill="${textColor}">
          ${text}
        </text>
      </svg>
    `;
  }
  
  module.exports = { createSVG };