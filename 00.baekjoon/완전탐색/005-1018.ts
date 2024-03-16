//https://www.acmicpc.net/problem/1018

const [input, ...lines]: string[] = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const [N, M] = input.split(' ').map(Number);
const [maxN, maxM] = [N - 8, M - 8];
const MAX_COUNT = 64;
const board = lines.map((line) => line.split(''));

const white = ['WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW'];
const black = ['BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB'];

const calcMismatch = (r: number, c: number) => {
    let checkWhite = 0;
    let checkBlack = 0;

    for (let i = r; i < r + 8; i++) {
        for (let j = c; j < c + 8; j++) {
            if (board[i][j] !== white[i - r][j - c]) checkWhite++;
            if (board[i][j] !== black[i - r][j - c]) checkBlack++;
        }
    }

    return Math.min(checkWhite, checkBlack);
};

const getMinChangeCount = (max: number) => {
    let minCount = max;
    for (let i = 0; i <= maxN; i++) {
        for (let j = 0; j <= maxM; j++) {
            minCount = Math.min(minCount, calcMismatch(i, j));
        }
    }
    return minCount;
};

console.log(getMinChangeCount(MAX_COUNT));
