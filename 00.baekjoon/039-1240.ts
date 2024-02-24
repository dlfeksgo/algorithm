//https://www.acmicpc.net/problem/1240

const input: string[] = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const links: [number, number][][] = Array.from(Array(N + 1), () => []);
let visited: boolean[];
let count = 0;

for (let i = 1; i <= N - 1; i++) {
    const [x, y, point] = input[i].split(' ').map(Number);
    links[x].push([y, point]);
    links[y].push([x, point]);
}

const findPath = (start: number, end: number, dist: number) => {
    if (start === end) {
        return (count = dist);
    }
    if (visited[start]) return;
    visited[start] = true;
    for (const [y, point] of links[start]) {
        const totalDist = dist + point;
        findPath(y, end, totalDist);
        if (count === totalDist) break;
    }
};

for (let i = N; i < N + M; i++) {
    const [start, end] = input[i].split(' ').map(Number);
    visited = Array(N + 1).fill(false);
    findPath(start, end, 0);
    console.log(count);
}
