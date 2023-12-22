//https://www.acmicpc.net/problem/10162

const input: string = require('fs').readFileSync('input.txt').toString().trim();

const n = Number(input);
const MS = [300, 60, 10];

const solution = (n: number) => {
    const answer = MS.map((ms) => {
        const count = Math.floor(n / ms);
        n %= ms;
        return count;
    });

    if (n > 0) return -1;
    return answer.join(' ');
};

solution(n);
