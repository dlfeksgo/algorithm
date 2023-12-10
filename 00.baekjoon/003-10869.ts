//https://www.acmicpc.net/problem/10869

const input: string[] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .split('/n')[0]
    .split(' ');
const a = Number(input[0]);
const b = Number(input[1]);
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(String(a / b)));
console.log(a % b);
