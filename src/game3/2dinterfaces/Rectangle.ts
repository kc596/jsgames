import { Shape } from "./Shape";

export class Rectangle implements Shape {
    length: number
    breadth: number

    constructor(length: number, breadth: number) {
        this.length = length;
        this.breadth = breadth;
    }

    area() : number {
        return this.length * this.breadth;
    }
}
