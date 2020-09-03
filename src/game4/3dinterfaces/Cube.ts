import { Shape3D } from "./Shape3D";
import { Square } from "../../game3/2dinterfaces/Square";

export class Cube implements Shape3D {
    private square: Square;

    constructor(side: number) {
        this.square = new Square(side);
    }

    side() : number {
        return this.square.side;
    }

    surfaceArea() : number {
        return 6 * this.square.area();
    }

    volume(): number {
        return this.square.area() * this.square.side;
    }
}