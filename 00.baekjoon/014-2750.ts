//https://www.acmicpc.net/problem/2750

const [, ...lines]: string[] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');
const ascArr = lines.map(Number);
ascArr.sort((a, b) => a - b);
console.log(ascArr.join('\n'));
