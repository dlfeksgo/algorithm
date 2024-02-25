//https://www.acmicpc.net/problem/1388

const [input, ...lines]: string[] = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const [N, M] = input.split(' ').map(Number);

const shapeMap = lines.map((line) => line.split(''));
const visited = shapeMap.map((v) => v.map(() => false));

const ds = [1, -1];
let count = 0;

const matchCoord = (targetCoord: number, fixedCoord: number, shape: string, maxCoord: number) => {
    for (let i = 0; i < 2; i++) {
        const newCoord = targetCoord + ds[i];
        if (newCoord < 0 || newCoord >= maxCoord) continue;
        if (shape === '-') {
            if (!visited[fixedCoord][newCoord] && shapeMap[fixedCoord][newCoord] === shape) return newCoord;
        } else {
            if (!visited[newCoord][fixedCoord] && shapeMap[newCoord][fixedCoord] === shape) return newCoord;
        }
    }
};

const checkShape = (row: number, col: number, shape: string) => {
    if (visited[row][col]) return;
    visited[row][col] = true;
    if (shape === '-') {
        const newCoord = matchCoord(col, row, shape, M);
        if (newCoord) checkShape(row, newCoord, shape);
    } else {
        const newCoord = matchCoord(row, col, shape, N);
        if (newCoord) checkShape(newCoord, col, shape);
    }
};

for (const [i, row] of shapeMap.entries()) {
    for (const [j, col] of row.entries()) {
        if (!visited[i][j]) {
            count++;
            checkShape(i, j, col === '-' ? '-' : '|');
        }
    }
}

console.log(count);
