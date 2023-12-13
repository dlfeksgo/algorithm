//https://www.acmicpc.net/problem/18870

const [, $line]: string[] = require('fs')
    .readFileSync('input.txt')
    .toString()
    .trim()
    .split('\n');

const lines: number[] = $line.split(' ').map(Number);
const coordinatesX: number[] = [...new Set(lines)].sort((a, b) => a - b);
const map = new Map();

for (const [i, v] of coordinatesX.entries()) {
    map.set(v, i);
}

const outputs = lines.map((v) => map.get(v));
console.log(outputs.join(' '));
