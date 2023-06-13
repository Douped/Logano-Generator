class Shapes {
  constructor() {
    this.shapeColor = "";
  }
  setColor(color) {
    this.shapeColor = color;
  }
}

class Triangle extends Shapes {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>`;
  }
}

class Circle extends Shapes {
  render() {
    return `<circle cx="150" cy = "100" r = "100" fill="${this.shapeColor}"/>`;
  }
}

class Square extends Shapes {
  render() {
    return `<rect width="100%" height="100%" fill="${this.shapeColor}"/>`;
  }
}

module.exports = {Circle, Triangle, Square};