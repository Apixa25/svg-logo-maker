const Shapes = require("./shapes.js");

class Triangle extends Shapes {
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500">
        <polygon points="100, 15 200, 200 0, 200" fill="${this.color}" />
        <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.textColor}">
          ${this.text}
        </text>
      </svg>`
    }
}

module.exports = Triangle;