//https://www.acmicpc.net/problem/2512

const [, b, t]: string[] = require('fs')
    .readFileSync('input.txt')
    .toString()
    .trim()
    .split('\n');

const budgets = b.split(' ').map(Number);
const totalBudget = Number(t);

let start = 1;
let end = Math.max(...budgets);

let result = 0;
while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let sum = 0;
    for (const v of budgets) {
        sum += Math.min(mid, v);
    }
    if (sum <= totalBudget) {
        result = mid;
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}

console.log(result);
