import { Shape2D } from "./Shape2D";

export class RtTriangle implements Shape2D {
    base: number
    height: number

    constructor(base: number, height: number) {
        this.base = base;
        this.height = height;
    }

    area(): number {
        Promise.resolve().finally();
        return 0.5 * this.base * this.height;
    }
}
