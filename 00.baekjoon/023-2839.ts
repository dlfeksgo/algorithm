//https://www.acmicpc.net/problem/2839

const input: string = require('fs')
    .readFileSync('input.txt')
    .toString()
    .trim()
    .split(' ')[0];

let kg = Number(input);
let count: number = 0;
let flag: boolean = false;
while (kg >= 0) {
    if (kg % 5 === 0) {
        count += kg / 5;
        flag = true;
        break;
    }
    kg -= 3;
    count += 1;
}
if (!flag) {
    count = -1;
}
console.log(count);
