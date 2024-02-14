const [n, ...lines]: string[] = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const N = Number(n);
const villageMap: number[][] = lines.map((v) => v.split('').map(Number));
const visited: boolean[][] = Array.from(Array(N), () => Array(N).fill(false));
const village: number[] = [];
const distances = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
];
let count = 0;

const groupHouses = (row: number, col: number) => {
    //재귀 순회 시 graph[row][col]이 0인 곳을 방문할 수도 있다.
    if (villageMap[row][col] === 1 && !visited[row][col]) {
        visited[row][col] = true;
        count++;
        for (let i = 0; i < 4; i++) {
            const [newRow, newCol] = [row + distances[i][1], col + distances[i][0]];
            if (newRow >= 0 && newRow < N && newCol >= 0 && newCol < N) groupHouses(newRow, newCol);
        }
    }
};

for (const [rowIdx, row] of villageMap.entries()) {
    for (const [colIdx, col] of row.entries()) {
        //!visited[rowIdx][colIdx] 조건을 붙이지 않으면 dfs가 바로 종료되어도 count가 추가된다.
        if (col === 1 && !visited[rowIdx][colIdx]) {
            groupHouses(rowIdx, colIdx);
            village.push(count);
            count = 0;
        }
    }
}

console.log(village.length);
village.sort((a, b) => a - b);
for (const v of village) {
    console.log(v);
}
