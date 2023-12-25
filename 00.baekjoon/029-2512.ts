//https://www.acmicpc.net/problem/2512

const [, b, t]: string[] = require('fs')
    .readFileSync('input.txt')
    .toString()
    .trim()
    .split('\n');

const budgets = b.split(' ').map(Number);
const totalBudget = Number(t);

let low = 1;
let high = Math.max(...budgets);

let maxBudget = 0;

const calcSum = (mid: number) => {
    let sum = 0;
    for (const v of budgets) {
        sum += Math.min(mid, v);
    }
    return sum;
};

const bs = (target: number, low: number, high: number) => {
    if (low > high) return;
    let mid = Math.floor((low + high) / 2);
    let sum = calcSum(mid);
    if (sum <= target) {
        maxBudget = mid;
        bs(totalBudget, mid + 1, high);
    } else bs(totalBudget, low, mid - 1);
};

bs(totalBudget, low, high);
console.log(maxBudget);
