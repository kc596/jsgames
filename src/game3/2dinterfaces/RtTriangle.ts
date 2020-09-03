import { Shape } from "./Shape";

// RtTraingle is not used anywhere
export class RtTriangle implements Shape {
    base: number
    height: number

    constructor(base: number, height: number) {
        this.base = base;
        this.height = height;
    }

    area(): number {
        return 0.5 * this.base * this.height;
    }
}
