//https://www.acmicpc.net/problem/2309

const dwarfs: number[] = require('fs').readFileSync('input.txt').toString().trim().split('\n').map(Number);
const maxHeight = 100;
const totalDwarfsHeight = dwarfs.reduce((a, b) => a + b);
dwarfs.sort((a, b) => a - b);

const findDwarfs = (total: number, maxSum: number) => {
    let filteredDwarfs: number[] = [];
    for (const [i, v1] of dwarfs.entries()) {
        for (const v2 of dwarfs.slice(i + 1)) {
            if (v1 + v2 === total - maxSum) {
                filteredDwarfs = dwarfs.filter((x) => x !== v1 && x !== v2);
            }
        }
    }
    return filteredDwarfs;
};

const result = findDwarfs(totalDwarfsHeight, maxHeight);
console.log(result.join('\n'));
