//https://www.acmicpc.net/problem/2805

const [n, t]: string[] = require('fs')
    .readFileSync('input.txt')
    .toString()
    .trim()
    .split('\n');

const requiredTree = n.split(' ').map(Number)[1];
const trees = t.split(' ').map(Number);

let low = 0;
let high = Math.max(...trees);

let height = 0;

const bs = (low: number, high: number) => {
    if (low > high) return;
    let mid = Math.floor((low + high) / 2);
    let rest = 0;
    for (const tree of trees) {
        if (tree > mid) rest += tree - mid;
    }
    if (rest < requiredTree) bs(low, mid - 1);
    else {
        height = mid;
        bs(mid + 1, high);
    }
};

bs(low, high);
console.log(height);
