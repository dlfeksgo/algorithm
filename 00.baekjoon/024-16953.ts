//https://www.acmicpc.net/problem/16953

let [a, b]: number[] = require('fs')
    .readFileSync('input.txt')
    .toString()
    .trim()
    .split(' ')
    .map(Number);

let flag = false;
let count = 1;
while (b >= a) {
    if (a === b) {
        flag = true;
        break;
    }
    if (b % 2 === 0) {
        b /= 2;
    } else if (b % 2 === 1) {
        b = Math.floor(b / 10);
    } else break;
    count += 1;
}
if (flag) {
    console.log(count);
} else {
    console.log(-1);
}
