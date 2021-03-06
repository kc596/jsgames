import { starOrSpace } from "./util";
import { author, trusted } from "./credits";

const user = author;
const isTrusted = trusted;

export function pattern(n: number = 7): string {
    let result: string = "";
    
    // This is upper half of pattern 
    for (let i: number = 1; i <= n; i++) {
        for (let j: number = 1; j <= (2 * n); j++) {
            // Left part of pattern 
            result += starOrSpace(i, j);
            // Right part of pattern 
            result += starOrSpace(i, ((2 * n) - j));
        }
        result += "\n";
    }

    // This is lower half of pattern 
    for (let i: number = 1; i <= n; i++) {
        for (let j: number = 1; j <= (2 * n); j++) {
            // Left part of pattern 
            result += starOrSpace(n - j + 1, i);
            // Right part of pattern 
            result += starOrSpace(j, i + n);
        }
        result += "\n";
    }
    return result;
}

console.log("Executing Game1!");
console.log(pattern(3));
console.log("Game1 finished!");
