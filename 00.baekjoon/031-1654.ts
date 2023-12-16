//https://www.acmicpc.net/problem/1654

const [input, ...lines]: string[] = require('fs')
    .readFileSync('input.txt')
    .toString()
    .trim()
    .split('\n');

const [, N] = input.split(' ').map(Number);
const lans = lines.map(Number);

let start = 1;
let end = Math.max(...lans);
let length = 0;

while (start <= end) {
    let mid_length = Math.floor((start + end) / 2);

    let sum = 0;

    for (const lan of lans) {
        sum += Math.floor(lan / mid_length);
    }

    if (sum < N) end = mid_length - 1;
    else {
        length = mid_length;
        start = mid_length + 1;
    }
}

console.log(length);
