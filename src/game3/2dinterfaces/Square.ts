import { Shape } from "./Shape";

export class Square implements Shape {
    side: number
    constructor(side: number) {
        this.side = side;
    }
    area() : number {
        return this.side*this.side;
    }
}