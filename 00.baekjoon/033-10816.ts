//https://www.acmicpc.net/problem/10816

const [, numN, , numM]: string[] = require('fs')
    .readFileSync('input.txt')
    .toString()
    .trim()
    .split('\n');

const N = numN
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

const M = numM.split(' ').map(Number);

const map = new Map();

const getValue = (value: number) => {
    const v = map.get(value);
    if (v) return v + 1;
    else return 1;
};

const setValue = (key: number, value: number) => {
    map.set(key, value);
};

for (const v of N) {
    setValue(v, getValue(v));
}

const answer: number[] = [];
for (const v of M) {
    if (map.has(v)) answer.push(map.get(v));
    else answer.push(0);
}

console.log(answer.join(' '));
