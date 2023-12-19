//https://www.acmicpc.net/problem/13305

const [, d, p]: string[] = require('fs')
    .readFileSync('input.txt')
    .toString()
    .trim()
    .split('\n');

const distances = d.split(' ').map(Number);
const price = p.split(' ').map(Number);

let oilPrice = price[0];

let answer = BigInt(0);
for (const [i, distance] of distances.entries()) {
    oilPrice = Math.min(oilPrice, price[i]);
    answer += BigInt(oilPrice) * BigInt(distance);
}

console.log(String(answer));
