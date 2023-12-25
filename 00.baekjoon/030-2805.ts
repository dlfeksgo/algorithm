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

const calcRest = (mid: number) => {
    let rest = 0;
    for (const tree of trees) {
        if (tree > mid) rest += tree - mid;
    }
    return rest;
};

const bs = (target: number, low: number, high: number) => {
    if (low > high) return;
    let mid = Math.floor((low + high) / 2);
    const rest = calcRest(mid);
    if (rest < target) bs(requiredTree, low, mid - 1);
    else {
        height = mid;
        bs(requiredTree, mid + 1, high);
    }
};

bs(requiredTree, low, high);
console.log(height);
