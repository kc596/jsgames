import { Shape } from "./Shape";

export class Circle implements Shape {
    radius: number

    constructor(radius: number) {
        this.radius = radius;
    }

    area() : number {
        return Math.PI * this.radius * this.radius;
    }
}
