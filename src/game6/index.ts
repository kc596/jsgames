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

let results: Array<[string, string]> = [
    ["hypercube(3)", ""+hypercube(3)],
    ["pow9(3)", ""+pow9(3)],
    ["pow2(10)", ""+pow2(10)],
    ["Pattern imported from Game2 in Game6\n", pattern(5)],
];
console.log("Executing Game6!");
results.forEach((element: any) => {
    console.log(element[0], ":", element[1]);
});
console.log("Game6 finished!");
//Promise.resolve().finally();
