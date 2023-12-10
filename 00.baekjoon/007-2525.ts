//https://www.acmicpc.net/problem/2525

const input: string[] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .split('\n');
let now =
    Number(input[0].split(' ')[0]) * 60 +
    Number(input[0].split(' ')[1]) +
    Number(input[1]);
now %= 1440;
const hour = parseInt(String(now / 60), 10);
const minute = now % 60;

console.log(hour + ' ' + minute);
