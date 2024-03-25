//https://www.acmicpc.net/problem/1018

const [input, ...lines]: string[] = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const [N, M] = input.split(' ').map(Number);
const [maxN, maxM] = [N - 8, M - 8];
const MAX_COUNT = 64;
const board = lines.map((line) => line.split(''));

const getDifferCountByColor = (r: number, c: number, expectedColor: string) => {
    let changedCount = 0;
    for (let i = r; i < r + 8; i++) {
        for (let j = c; j < c + 8; j++) {
            const currentColor = board[i][j];
            if ((i + j) % 2 === 0) {
                if (currentColor === expectedColor) changedCount++;
            } else {
                if (currentColor !== expectedColor) changedCount++;
            }
        }
    }
    return Math.min(MAX_COUNT - changedCount, changedCount);
};

const getMinChangeCount = (max: number) => {
    let minCount = max;
    for (let i = 0; i <= maxN; i++) {
        for (let j = 0; j <= maxM; j++) {
            minCount = Math.min(minCount, getDifferCountByColor(i, j, 'W'));
        }
    }
    return minCount;
};

console.log(getMinChangeCount(MAX_COUNT));
