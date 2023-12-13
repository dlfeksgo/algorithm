//https://www.acmicpc.net/problem/2438

const input: string[] = require('fs')
    .readFileSync('input.txt')
    .toString()
    .trim()
    .split('\n')[0];

const n = Number(input);
let answer: string = '';
for (let i = 0; i < n; i++) {
    answer += '*';
    console.log(answer);
}
