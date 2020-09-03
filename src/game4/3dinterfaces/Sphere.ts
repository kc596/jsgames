import { Shape3D } from "./Shape3D";
import { Circle } from "../../game3/2dinterfaces/Circle";

export class Sphere implements Shape3D {
    private circle: Circle;

    constructor(radius: number) {
        this.circle = new Circle(radius);
    }

    radius() : number {
        return this.circle.radius;
    }

    surfaceArea() : number {
        return 4 * this.circle.area();
    }

    volume(): number {
        return 4 * this.circle.area() * this.circle.radius / 3;
    }
}