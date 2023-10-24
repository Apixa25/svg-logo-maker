const Circle = require('../lib/circle.js')
const Shapes = require('../lib/svgGenerator.js')

describe('Circle', () => {

    test('logo must have shape, shape color, text, and text color', () => {

        const Circle = new Circle('coral','SEX','red');

        expect(circle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500">
        <circle cx="75" cy="75" r="75" fill="coral" />
        <text x="75" y="85" font-size="60" text-anchor="middle" fill="red">
          SEX
        </text>
      </svg>`
        );
    
    });
});

