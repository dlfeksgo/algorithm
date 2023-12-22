//https://www.acmicpc.net/problem/1654

const [input, ...lines]: string[] = require('fs')
    .readFileSync('input.txt')
    .toString()
    .trim()
    .split('\n');

const [, N] = input.split(' ').map(Number);
const lans = lines.map(Number);

let low = 1;
let high = Math.max(...lans);
let length = 0;

const bs = (low: number, high: number) => {
    if (low > high) return;
    let mid = Math.floor((low + high) / 2);
    let sum = 0;

    for (const lan of lans) {
        sum += Math.floor(lan / mid);
    }

    if (sum < N) bs(low, mid - 1);
    else {
        length = mid;
        bs(mid + 1, high);
    }
};

bs(low, high);
console.log(length);
