//https://www.acmicpc.net/problem/10998

let input = require('fs').readFileSync('/dev/stdin').toString().split('/n');

let line = input[0].split(' ');

console.log(parseInt(line[0]) * parseInt(line[1]));
