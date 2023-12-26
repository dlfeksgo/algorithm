//https://www.acmicpc.net/problem/5585

const input: string = require('fs').readFileSync('input.txt').toString().trim();

let pay = 1000 - Number(input);
const coins = [500, 100, 50, 10, 5, 1];

let count = 0;
for (const coin of coins) {
    count += Math.floor(pay / coin);
    pay %= coin;
}

console.log(count);
