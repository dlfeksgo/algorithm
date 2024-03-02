//https://www.acmicpc.net/problem/7562

const [n, ...lines]: string[] = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const testCase = Number(n);

const ds = [
    [-2, -1],
    [-1, -2],
    [-2, 1],
    [1, -2],
    [-1, 2],
    [2, -1],
    [1, 2],
    [2, 1],
];

let boardSize: number, start: number[], end: number[], visited: boolean[][];

const bfs = () => {
    const queue = [[...start, 0]];

    while (queue.length) {
        const [row, col, move] = queue.shift()!;

        if (row === end[0] && col === end[1]) return move;

        for (const [r, c] of ds) {
            const [nr, nc] = [row + r, col + c];
            if (nr >= 0 && nc >= 0 && nr < boardSize && nc < boardSize && !visited[nr][nc]) {
                visited[nr][nc] = true;
                queue.push([nr, nc, move + 1]);
            }
        }
    }
};

for (let i = 0; i < testCase; i++) {
    const caseUnit = lines.splice(0, 3);
    boardSize = Number(caseUnit[0]);
    start = caseUnit[1].split(' ').map(Number);
    end = caseUnit[2].split(' ').map(Number);
    visited = Array.from(Array(boardSize), () => Array(boardSize).fill(false));
    console.log(bfs());
}
