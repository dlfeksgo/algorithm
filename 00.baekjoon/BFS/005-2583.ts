//https://www.acmicpc.net/problem/2583

const [input, ...lines]: string[] = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const [maxRow, maxCol] = input.split(' ').map(Number);
const coloredGrid = lines.map((line) => line.split(' ').map(Number));
const grid: number[][] = [...Array(maxRow)].map(() => Array(maxCol).fill(0));

const ds = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
];

for (const [startCol, startRow, endCol, endRow] of coloredGrid) {
    for (let r = maxRow - endRow; r < maxRow - startRow; r++) {
        for (let c = startCol; c < endCol; c++) {
            grid[r][c] = 1;
        }
    }
}

const bfs = (row: number, col: number) => {
    const queue: [number, number][] = [[row, col]];
    let count = 0;

    while (queue.length) {
        const [r1, c1] = queue.shift()!;
        if (grid[r1][c1]) continue;
        grid[r1][c1] = 1;
        count++;

        for (const [r, c] of ds) {
            const [nr, nc] = [r1 + r, c1 + c];
            if (nr >= 0 && nc >= 0 && nr < maxRow && nc < maxCol) {
                queue.push([nr, nc]);
            }
        }
    }
    return count;
};

const answer: number[] = [];
for (const [i, row] of grid.entries()) {
    for (const j of row.keys()) {
        if (!grid[i][j]) {
            answer.push(bfs(i, j));
        }
    }
}

console.log(answer.length);
console.log(answer.sort((a, b) => a - b).join(' '));
