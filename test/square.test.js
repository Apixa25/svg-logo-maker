const Square = require('../lib/square.js'); 

describe('Square', () => {
  test('should render an SVG with the correct attributes', () => {
    const square = new Square();
    square.color = 'blue';
    square.textColor = 'white';
    square.text = 'MAD';

    const expectedSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500">
        <rect width="200" height="200" fill="blue" />
        <text x="100" y="110" font-size="65" text-anchor="middle" fill="white">
          MAD
        </text>
      </svg>`;

    expect(square.render()).toEqual(expectedSVG);
  });
});