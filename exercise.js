class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(val){
    let calc = 0;
    let num = Object.values(val);
    if (val instanceof Square) {
      num.forEach(side => {
        calc = side * side;
      });
      return calc;
    }
    else if (val instanceof Rectangle){
      return calc = num.reduce((a, b) => a * b);
    }
    else if(val instanceof Circle){
      num.forEach(radius => {
        calc = Math.PI * radius;
      });
      return calc;
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));