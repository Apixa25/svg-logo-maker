const Circle = require('../lib/circle.js')
// const Shapes = require('../lib/svgGenerator.js')

describe('Circle', () => {
  test('if the properties work we will get a LOGO!', () => {
    const circle = new Circle('blue', 'PIE', 'yellow');

    expect(circle.color).toBe('blue');
    expect(circle.text).toBe('PIE');
    expect(circle.textColor).toBe('yellow');
  });

  test('render method should return a valid SVG', () => {
    const circle = new Circle('blue', 'PIE', 'yellow');
    const expectedSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500">
        <circle cx="75" cy="75" r="75" fill="blue" />
        <text x="75" y="85" font-size="60" text-anchor="middle" fill="yellow">
          PIE
        </text>
      </svg>`;

    expect(circle.render()).toBe(expectedSvg);
  });
});

