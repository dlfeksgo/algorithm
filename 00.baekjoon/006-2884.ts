//https://www.acmicpc.net/problem/2884

const input: string[] = require('fs')
    .readFileSync('input.txt')
    .toString()
    .split('\n')[0]
    .split(' ');

let [hour, minute] = input.map(Number);

if (hour === 0) hour = 24;

let time = hour * 60 + minute - 45;
time %= 1440;

hour = Math.floor(time / 60);
minute = time % 60;

console.log(hour + ' ' + minute);
