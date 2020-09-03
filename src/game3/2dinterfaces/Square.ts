import { Shape2D } from "./Shape2D";

export class Square implements Shape2D {
    side: number
    constructor(side: number) {
        this.side = side;
    }
    area() : number {
        return this.side*this.side;
    }
}