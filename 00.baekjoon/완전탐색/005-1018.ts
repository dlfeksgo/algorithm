//https://www.acmicpc.net/problem/1018

const [input, ...lines]: string[] = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const [N, M] = input.split(' ').map(Number);
const [maxN, maxM] = [N - 8, M - 8];
const MAX_COUNT = 64;
const board = lines.map((line) => line.split(''));

const countMinDiffer = (r: number, c: number) => {
    const count: Record<string, number> = {
        white: 0,
        black: 0,
    };

    for (let i = r; i < r + 8; i++) {
        for (let j = c; j < c + 8; j++) {
            const val = board[i][j];
            let color = '';
            if ((i + j) % 2 === 0) {
                color = val === 'W' ? 'white' : 'black';
            } else {
                color = val === 'B' ? 'white' : 'black';
            }
            count[color] += 1;
        }
    }
    return Math.min(count.white, count.black);
};

const getMinChangeCount = (max: number) => {
    let minCount = max;
    for (let i = 0; i <= maxN; i++) {
        for (let j = 0; j <= maxM; j++) {
            minCount = Math.min(minCount, countMinDiffer(i, j));
        }
    }
    return minCount;
};

console.log(getMinChangeCount(MAX_COUNT));
