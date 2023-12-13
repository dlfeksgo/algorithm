//https://www.acmicpc.net/problem/1427

const str: string = require('fs').readFileSync('input.txt').toString().trim();

const numArr: number[] = [];
for (const v of str) {
    numArr.push(Number(v));
}
numArr.sort((a, b) => b - a);
console.log(numArr.join(''));
