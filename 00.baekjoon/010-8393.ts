//https://www.acmicpc.net/problem/8393

const input: string[] = require('fs')
    .readFileSync('input.txt')
    .toString()
    .split('\n')[0];
const n = Number(input);

let answer: number = 0;
for (let i = 1; i <= n; i++) {
    answer += i;
}
console.log(answer);
