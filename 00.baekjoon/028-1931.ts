//https://www.acmicpc.net/problem/1931

const [, ...lines]: string[] = require('fs')
    .readFileSync('input.txt')
    .toString()
    .trim()
    .split('\n');

const times = lines.map((line) => line.split(' ').map(Number));

times.sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1];
    else return a[0] - b[0];
});

let endTime = times[0][1];
let count = 1;

for (const [start, end] of times.slice(1)) {
    if (endTime <= start) {
        endTime = end;
        count += 1;
    }
}

console.log(count);
