//https://www.acmicpc.net/problem/2752

const input: string[] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .split(' ');
const ascArr = input.map(Number);
ascArr.sort((a, b) => a - b);
console.log(ascArr.join(' '));
