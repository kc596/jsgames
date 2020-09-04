import { starOrSpace } from "../game1/util";

export function pattern(n: number = 7): string {
    let result = "";

    // This is upper half of pattern 
    for (let i: number = 1; i <= n; i++) {
        for (let j: number = 1; j <= (2 * n); j++) {
            // Left part of pattern 
            result += starOrSpace(n-j+1, i);
            // Right part of pattern 
            result += starOrSpace(j, i+n);
        }
        result += "\n";
    }

    // This is lower half of pattern 
    for (let i:number = 1; i <= n; i++) {
        for (let j:number = 1; j <= (2 * n); j++) {
            // Right Part of pattern 
            result += starOrSpace(i, j);
            // Left Part of pattern 
            result += starOrSpace(i, 2*n-j);
        }
        result += "\n";
    }
    return result;
}

console.log("Executing Game2!");
console.log(pattern(3));
console.log("Game2 finished!");
