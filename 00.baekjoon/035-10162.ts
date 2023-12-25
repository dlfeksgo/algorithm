//https://www.acmicpc.net/problem/10162

const input: string = require('fs').readFileSync('input.txt').toString().trim();

const n = Number(input);
const MS = [300, 60, 10];

export const solution = (n: number) => {
    let answer: number[] = [];
    for (const ms of MS) {
        answer.push(Math.floor(n / ms));
        n %= ms;
    }

    if (n > 0) return -1;
    return answer.join(' ');
};

solution(n);
