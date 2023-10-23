const Shapes = require("./shapes.js");

class Square extends Shapes {
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500">
        <rect width="200" height="200" fill="${this.color}" />
        <text x="100" y="110" font-size="65" text-anchor="middle" fill="${this.textColor}">
          ${this.text}
        </text>
      </svg>`
    }
}

module.exports = Square;