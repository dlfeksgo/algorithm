//https://school.programmers.co.kr/learn/courses/30/lessons/181945

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
    for (const v of str) {
        console.log(v);
    }
});
