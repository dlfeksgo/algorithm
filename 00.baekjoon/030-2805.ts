//https://www.acmicpc.net/problem/2805

import { binarySearch } from '../templates/bs';

const [n, t]: string[] = require('fs')
    .readFileSync('input.txt')
    .toString()
    .trim()
    .split('\n');

const requiredTree = n.split(' ').map(Number)[1];
const trees = t
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

let low = 0;
let high = trees[trees.length - 1];

const comparator = (mid: number, target: number): number => {
    let rest = 0;
    for (const tree of trees) {
        if (tree > mid) rest += tree - mid;
    }
    if (rest >= target) return 1;
    else return -1;
};

const height = binarySearch(trees, requiredTree, low, high, comparator);
console.log(height);
