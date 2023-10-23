const Shapes = require("./shapes.js");

class Circle extends Shapes {
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
        <circle cx="50" cy="50" r="50" fill="${this.color}" />
        <text x="50%" y="50%" font-size="48" text-anchor="middle" fill="${this.textColor}">
          ${this.text}
        </text>
      </svg>`
    }
}

module.exports = Circle;