const Shape = require("./shapes.js");

class Circle extends Shape {
    render() {
        return <svg width="100" height="100">
        <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
        </svg>
    }
}

module.exports = Circle;