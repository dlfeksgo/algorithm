//https://www.acmicpc.net/problem/10162

const input: string = require('fs').readFileSync('input.txt').toString().trim();

let n = Number(input);
let answer = '';

const solution = (n: number) => {
    answer += Math.floor(n / 300) + ' ';
    n %= 300;
    answer += Math.floor(n / 60) + ' ';
    n %= 60;
    answer += Math.floor(n / 10);
    n %= 10;

    if (n > 0) return -1;
    return answer;
};

console.log(solution(n));
