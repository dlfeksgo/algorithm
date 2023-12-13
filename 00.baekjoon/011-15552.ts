//https://www.acmicpc.net/problem/15552

// const [_, ...lines]: string[] = require('fs')
//     .readFileSync('input.txt')
//     .toString()
//     .split('\n');

const input: string[] = require('fs')
    .readFileSync('input.txt')
    .toString()
    .split('\n');

input.shift();

let answer: string = '';
for (const v of input) {
    const [x, y]: number[] = v.split(' ').map(Number);
    answer += x + y + '\n';
}
console.log(answer);
