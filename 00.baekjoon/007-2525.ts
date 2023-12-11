//https://www.acmicpc.net/problem/2525

const [now, required]: string[] = require('fs')
    .readFileSync('input.txt')
    .toString()
    .split('\n');

let [hour, minute] = now.split(' ').map(Number);
let endTime = hour * 60 + minute + Number(required);

endTime %= 1440;
hour = Math.floor(endTime / 60);
minute = endTime % 60;

console.log(hour + ' ' + minute);
