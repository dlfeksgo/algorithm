//https://www.acmicpc.net/problem/11650

const [, ...lines]: string[] = require('fs')
    .readFileSync('input.txt')
    .toString()
    .trim()
    .split('\n');

const coordinates: number[][] = lines.map((v) => v.split(' ').map(Number));
coordinates.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

let answer: string = '';
for (const [x, y] of coordinates) {
    // console.log(x + ' ' + y); 시간초과
    answer += x + ' ' + y + '\n';
}
console.log(answer);
