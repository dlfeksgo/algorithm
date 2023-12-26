//https://www.acmicpc.net/problem/1654

import { binarySearch } from '../templates/bs';

const [input, ...lines]: string[] = require('fs')
    .readFileSync('input.txt')
    .toString()
    .trim()
    .split('\n');

const [, N] = input.split(' ').map(Number);
const lans = lines.map(Number).sort((a, b) => a - b);

let low = 1;
let high = lans[lans.length - 1];

const comparator = (mid: number, target: number) => {
    let sum = 0;
    for (const lan of lans) {
        sum += Math.floor(lan / mid);
    }
    if (sum >= target) return 1;
    else return -1;
};

const length = binarySearch(lans, N, low, high, comparator);
console.log(length);
