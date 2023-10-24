const Shapes = require("./shapes.js");

class Circle extends Shapes {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
};
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500">
        <circle cx="75" cy="75" r="75" fill="${this.color}" />
        <text x="75" y="85" font-size="60" text-anchor="middle" fill="${this.textColor}">
          ${this.text}
        </text>
      </svg>`
    }
}

module.exports = Circle;