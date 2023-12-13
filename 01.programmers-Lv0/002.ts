//https://school.programmers.co.kr/learn/courses/30/lessons/181951

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input: string[] = [];

rl.on('line', function (line: string) {
    input = line.split(' ');
}).on('close', function () {
    const a = input[0];
    const b = input[1];
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
});
