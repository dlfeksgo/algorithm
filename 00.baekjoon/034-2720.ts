//https://www.acmicpc.net/problem/2720

const [, ...lines]: string[] = require('fs')
    .readFileSync('input.txt')
    .toString()
    .trim()
    .split('\n');

const coins = [25, 10, 5, 1];
const testCases = lines.map(Number);

const answer = testCases.map((v) =>
    coins
        .map((coin) => {
            const count = Math.floor(v / coin) + ' ';
            v %= coin;
            return count;
        })
        .join(''),
);

console.log(answer.join('\n'));
