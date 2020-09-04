import { Cube } from "../game4/3dinterfaces/Cube";
import { pow3 } from "../game5/index";
import { expo } from "fastexponent";
import { pattern } from "../game2/index";

export function hypercube(x: number): number {
    return new Cube(x).volume() * x;
}

export function pow9(exponent: number): number {
    return pow3(exponent << 1);
}

export function pow2(exponent: number): number {
    return expo(2, exponent);
}

console.log("Executing Game6!");
console.log("hypercube(3)", hypercube(3));
console.log("pow9(3)", pow9(3));
console.log("pow2(10)", pow2(10));
console.log("Pattern imported from Game2 in Game6", pattern(5));
console.log("Game6 finished!");
