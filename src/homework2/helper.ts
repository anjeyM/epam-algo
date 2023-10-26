export function addTrailingZeros(value: number, totalLength: number): string {
    return String(value).padEnd(totalLength, '.00');
}