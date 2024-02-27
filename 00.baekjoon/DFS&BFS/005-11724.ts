//https://www.acmicpc.net/problem/11724

const [input, ...lines]: string[] = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const [N] = input.split(' ').map(Number);
const graph: number[][] = Array.from(Array(N + 1), () => []);
const visited: boolean[] = Array(N + 1).fill(false);
let count = 0;

for (const line of lines) {
    const [u, v] = line.split(' ').map(Number);
    graph[u].push(v);
    graph[v].push(u);
}

const checkConnectedLink = (x: number) => {
    if (visited[x]) return;
    visited[x] = true;
    for (const y of graph[x]) {
        if (!visited[y]) {
            checkConnectedLink(y);
        }
    }
};

for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
        checkConnectedLink(i);
        count++;
    }
}

console.log(count);
