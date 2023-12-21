//https://www.acmicpc.net/problem/2720

const [, ...lines]: string[] = require('fs')
    .readFileSync('input.txt')
    .toString()
    .trim()
    .split('\n');

const coins = [25, 10, 5, 1];
const testCases = lines.map(Number);

let answer = '';

for (let v of testCases) {
    let count = '';
    for (const coin of coins) {
        count += Math.floor(v / coin) + ' ';
        v %= coin;
    }
    answer += count + '\n';
}

console.log(answer);
