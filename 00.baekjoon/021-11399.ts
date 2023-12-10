//https://www.acmicpc.net/problem/11399

const [, line]: string[] = require('fs')
    .readFileSync('input.txt')
    .toString()
    .trim()
    .split('\n');

const times = line.split(' ').map(Number);
times.sort((a, b) => a - b);

let accTimes: number = 0;
let total: number = 0;
for (const time of times) {
    accTimes += time;
    total += accTimes;
}
console.log(total);
