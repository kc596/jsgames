import { Shape2D } from "./Shape2D";

export class Circle implements Shape2D {
    radius: number

    constructor(radius: number) {
        this.radius = radius;
    }

    area() : number {
        return Math.PI * this.radius * this.radius;
    }
}
