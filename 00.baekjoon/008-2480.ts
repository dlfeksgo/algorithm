//https://www.acmicpc.net/problem/2480

const input: string[] = require('fs').readFileSync('input.txt').toString().split('\n')[0].split(' ');

const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);

const ab = a === b;
const bc = a === c;

let result: number;
if (ab && bc) {
    result = 10000 + a * 1000;
} else if (ab) {
    result = 1000 + a * 100;
} else if (a === c) {
    result = 1000 + a * 100;
} else if (bc) {
    result = 1000 + b * 100;
} else {
    result = Math.max(a, b, c) * 100;
}

console.log(result);
