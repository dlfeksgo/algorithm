//https://www.acmicpc.net/problem/2805

const [n, t]: string[] = require('fs')
    .readFileSync('input.txt')
    .toString()
    .trim()
    .split('\n');

const requiredTree = n.split(' ').map(Number)[1];
const trees = t.split(' ').map(Number);

let start = 0;
let end = Math.max(...trees);

let height = 0;

while (start <= end) {
    let mid_height = Math.floor((start + end) / 2);
    let rest = 0;
    for (const tree of trees) {
        if (tree > mid_height) rest += tree - mid_height;
    }
    if (rest < requiredTree) {
        end = mid_height - 1;
    } else {
        height = mid_height;
        start = mid_height + 1;
    }
}
console.log(height);
