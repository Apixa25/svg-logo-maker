const Triangle = require("../lib/triangle.js");

describe("Triangle", () => {
  test("renders a triangle SVG correctly", () => {
    const triangle = new Triangle("blue", "WOW", "red");
    const svg = triangle.render();

    // Define the expected SVG string
    const expectedSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500">
        <polygon points="100, 15 200, 200 0, 200" fill="blue" />
        <text x="100" y="185" font-size="70" text-anchor="middle" fill="red">
          WOW
        </text>
      </svg>`;

    expect(svg).toBe(expectedSVG);
  });
});
