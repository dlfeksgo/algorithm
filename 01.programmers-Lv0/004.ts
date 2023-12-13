//https://school.programmers.co.kr/learn/courses/30/lessons/181949

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input: string[] = [];

rl.on('line', function (line: string) {
    input = [line];
}).on('close', function () {
    const str = input[0];
    const arr: string[] = [];
    for (const v of str) {
        arr.push(v === v.toUpperCase() ? v.toLowerCase() : v.toUpperCase());
    }
    console.log(arr.join(''));
});
