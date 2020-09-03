export function starOrSpace(first: number, second: number): string {
    if (first < second) {
        return " ";
    }
    return "*";
}
