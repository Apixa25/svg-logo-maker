// const { createSVG } = require('./lib/svgGenerator.js');
function createSVG({ text, textColor, shape, shapeColor }) {
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