//https://www.acmicpc.net/problem/1018

const [input, ...lines]: string[] = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const [N, M] = input.split(' ').map(Number);
const [maxN, maxM] = [N - 8, M - 8];
const MAX_COUNT = 64;
const board = lines.map((line) => line.split(''));

const getChangeCountByColor = (r: number, c: number) => {
    let white = 0;
    let black = 0;
    for (let i = r; i < r + 8; i++) {
        for (let j = c; j < c + 8; j++) {
            const expectedColor = (i + j) % 2 === 0 ? 'W' : 'B';

            if (board[i][j] === expectedColor) white++;
            else black++;
        }
    }
    return Math.min(white, black);
};

const getMinChangeCount = (max: number) => {
    let minCount = max;
    for (let i = 0; i <= maxN; i++) {
        for (let j = 0; j <= maxM; j++) {
            minCount = Math.min(minCount, getChangeCountByColor(i, j));
        }
    }
    return minCount;
};

console.log(getMinChangeCount(MAX_COUNT));
