import { Shape2D } from "./Shape2D";

export class Rectangle implements Shape2D {
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
