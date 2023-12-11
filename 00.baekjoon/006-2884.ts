//https://www.acmicpc.net/problem/2884

const input: string[] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .split('\n')[0]
    .split(' ');
let hour = Number(input[0]);
let minute = Number(input[1]);
const SETTING_TIME = 45;

if (minute < SETTING_TIME) {
    hour -= 1;
    minute += 60 - SETTING_TIME;
    if (hour < 0) {
        hour = 23;
    }
} else {
    minute -= SETTING_TIME;
}

console.log(hour + ' ' + minute);
