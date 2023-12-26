//https://www.acmicpc.net/problem/2512

import { binarySearch } from '../templates/bs';

const [, b, t]: string[] = require('fs')
    .readFileSync('input.txt')
    .toString()
    .trim()
    .split('\n');

const budgets = b
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
const totalBudget = Number(t);

let low = 1;
let high = budgets[budgets.length - 1];

const comparator = (mid: number, target: number): number => {
    let sum = 0;
    for (const v of budgets) {
        sum += Math.min(mid, v);
    }
    if (sum <= target) return 1;
    else return -1;
};

const maxBudget = binarySearch(budgets, totalBudget, low, high, comparator);
console.log(maxBudget);
