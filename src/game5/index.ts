import { expo, cont } from "fastexponent";

export function pow3(exponent: number): number {
    return expo(3, exponent);
}

console.log("Game5 executing", pow3(2), cont(["abc", "def"], "def"));
