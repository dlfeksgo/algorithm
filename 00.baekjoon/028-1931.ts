//https://www.acmicpc.net/problem/1931

const [$n, ...lines]: string[] = require('fs')
    .readFileSync('input.txt')
    .toString()
    .trim()
    .split('\n');

const n = Number($n);
const times = lines.map((line) => line.split(' ').map(Number));

times.sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1];
    else return a[0] - b[0];
});

let endTime = times[0][1];
let count = 1;

for (let i = 1; i < n; i++) {
    if (endTime <= times[i][0]) {
        endTime = times[i][1];
        count += 1;
    }
}

console.log(count);

//첫 번째 시도 - index 0 제외 시키지 않음
// for (const [start, end] of times.slice(1)) {
//     if (endTime <= start) {
//         endTime = end;
//         count += 1;
//     }
// }
