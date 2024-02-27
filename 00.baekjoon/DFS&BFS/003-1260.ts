//https://www.acmicpc.net/problem/1260

const [input, ...lines]: string[] = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const [N, , V] = input.split(' ').map(Number);
const graph: number[][] = Array.from(Array(N + 1), () => []);
let visited: boolean[];

//Graph 만들기
for (const v of lines) {
    const [v1, v2] = v.split(' ').map(Number);
    graph[v1].push(v2);
    graph[v2].push(v1);
}

//내부 원소 정렬
for (const v of graph) {
    v.sort((a, b) => a - b);
}

//DFS
const dfsArr: number[] = [];
visited = Array(N + 1).fill(false);
const dfs = (vertex: number) => {
    if (visited[vertex]) return;
    visited[vertex] = true;
    dfsArr.push(vertex);
    for (const e of graph[vertex]) {
        dfs(e);
    }
};
dfs(V);

//BFS
const bfsArr: number[] = [];
const queue: number[] = [];
visited = Array(N + 1).fill(false);
const bfs = (vertex: number) => {
    queue.push(vertex);
    visited[vertex] = true;
    while (queue.length > 0) {
        const v = queue.shift()!;
        bfsArr.push(v);
        for (let e of graph[v]) {
            if (!visited[e]) {
                queue.push(e);
                visited[e] = true;
            }
        }
    }
};
bfs(V);

console.log(dfsArr.join(' '));
console.log(bfsArr.join(' '));
