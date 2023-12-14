//https://www.acmicpc.net/problem/13305

const [, d, p]: string[] = require('fs')
    .readFileSync('input.txt')
    .toString()
    .trim()
    .split('\n');

const distances = d.split(' ').map((v) => BigInt(v));
const price = p.split(' ').map((v) => BigInt(v));

let answer = BigInt(0);
let oilPrice = price[0];

for (const [i] of distances.entries()) {
    answer += oilPrice * distances[i];
    if (oilPrice > price[i + 1]) oilPrice = price[i + 1];
}

console.log(String(answer));
