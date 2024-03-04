//https://www.acmicpc.net/problem/2468

const [n, ...lines]: string[] = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const N = Number(n);
const heightMap: number[][] = lines.map((line) => line.split(' ').map(Number));
const ds = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
];

let visited: boolean[][], count: number;
let [min, max] = [0, 0];

for (const v of heightMap) {
    [min, max] = [Math.min(min, ...v), Math.max(max, ...v)];
}

const getMaxSafeAreas = (height: number, r: number, c: number) => {
    const queue: [number, number][] = [[r, c]];

    while (queue.length) {
        const [row, col] = queue.shift()!;
        visited[row][col] = true;

        for (const [r, c] of ds) {
            const [nr, nc] = [row + r, col + c];
            if (nr >= 0 && nc >= 0 && nr < N && nr < N && !visited[nr][nc] && heightMap[row][col] > height) {
                queue.push([nr, nc]);
            }
        }
    }
};

let result = 1;
for (let h = min; h <= max; h++) {
    visited = heightMap.map((v) => v.map(() => false));
    count = 0;
    for (const [i, r] of heightMap.entries()) {
        for (const [j, c] of r.entries()) {
            if (!visited[i][j] && c > h) {
                getMaxSafeAreas(h, i, j);
                count += 1;
            }
        }
    }
    result = Math.max(result, count);
}

console.log(result);
