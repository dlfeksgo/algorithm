//https://www.acmicpc.net/problem/2720

const [, ...lines]: string[] = require('fs')
    .readFileSync('input.txt')
    .toString()
    .trim()
    .split('\n');

const coins = [25, 10, 5, 1];
const testCases = lines.map(Number);

const answer: string[] = [];
for (let testCase of testCases) {
    const count: number[] = [];
    for (const coin of coins) {
        count.push(Math.floor(testCase / coin));
        testCase %= coin;
    }
    answer.push(count.join(' '));
}

console.log(answer.join('\n'));
