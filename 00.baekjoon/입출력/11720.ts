//https://www.acmicpc.net/problem/11720

const [, ...lines]: string[] = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const stringToNumberArr = lines[0].split('').map(Number);
let sum = 0;

for (const n of stringToNumberArr) {
  sum += n;
}

console.log(sum);
