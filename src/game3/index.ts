import { Circle } from "./2dinterfaces/Circle";
import { Square } from "./2dinterfaces/Square";
import { Rectangle } from "./2dinterfaces/Rectangle";

let square: Square = new Square(4);
console.log("Area of square with side ", square.side, ":", square.area());

let rect: Rectangle = new Rectangle(2, 8);
console.log("Area of rect with l and b ", rect.length, rect.breadth, ":", rect.area());

let circle: Circle = new Circle(5);
console.log("Area of circle with radius ", circle.radius, ":", circle.area());
