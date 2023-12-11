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
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            arr.push(str[i].toLowerCase());
        } else {
            arr.push(str[i].toUpperCase());
        }
    }
    console.log(arr.join(''));
});
