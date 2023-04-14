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

class AreaCalculator{
  static calculate(value){
    if(value instanceof Square) {
      this.Area = value.side * value.side;
    } else if (value instanceof Rectangle){
      this.Area = value.width * value.height;
    } else if (value instanceof Circle){
      this.Area = Math.PI * value.radius * lato.radius;
    }
    return this.Area;
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);
const pippo = new Square(10);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
console.log(AreaCalculator.calculate(pippo));
