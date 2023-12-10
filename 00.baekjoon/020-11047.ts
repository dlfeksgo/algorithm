//https://www.acmicpc.net/problem/11047

const [input, ...lines]: string[] = require('fs')
    .readFileSync('input.txt')
    .toString()
    .trim()
    .split('\n');

let [, k] = input.split(' ').map(Number);
const coins: number[] = lines
    .map(Number)
    // .filter((v) => k >= v) 부호 실수하면 실패
    .reverse();

let coinCount: number = 0;
for (const coin of coins) {
    coinCount += parseInt(String(k / coin));
    k %= coin;
}
console.log(coinCount);
