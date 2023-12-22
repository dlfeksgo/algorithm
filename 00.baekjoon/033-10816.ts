//https://www.acmicpc.net/problem/10816

import { countByRange } from '../templates/bs';

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
const answer = M.map((v) => countByRange(N, v, v));

console.log(answer.join(' '));
