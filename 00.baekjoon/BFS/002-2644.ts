//https://www.acmicpc.net/problem/2644

const [n, target, , ...lines]: string[] = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const [a, b] = target.split(' ').map(Number);
const N = Number(n);
const familyMap: number[][] = Array.from(Array(N + 1), () => []);
const visited: boolean[] = Array(N + 1).fill(false);

for (const line of lines) {
    const [x, y] = line.split(' ').map(Number);
    familyMap[x].push(y);
    familyMap[y].push(x);
}

const findRelationDistance = (start: number, end: number) => {
    const queue = [[start, 0]];
    visited[start] = true;
    while (queue.length) {
        const [person, ds] = queue.shift()!;
        if (person === end) return ds;

        for (const v of familyMap[person]) {
            if (!visited[v]) {
                visited[v] = true;
                queue.push([v, ds + 1]);
            }
        }
    }

    return -1;
};

console.log(findRelationDistance(a, b));
