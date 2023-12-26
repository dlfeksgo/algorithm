//https://www.acmicpc.net/problem/1931

const [, ...lines]: string[] = require('fs')
    .readFileSync('input.txt')
    .toString()
    .split('\n');

const [first, ...meetings] = lines
    .map((v) => v.split(' ').map(Number))
    .sort((a, b) => {
        if (a[1] === b[1]) return a[0] - b[0];
        else return a[1] - b[1];
    });

let count = 0;
let endTime = first[1];

for (const [start, end] of meetings) {
    if (start >= endTime) {
        endTime = end;
        count++;
    }
}

console.log(count + 1);
