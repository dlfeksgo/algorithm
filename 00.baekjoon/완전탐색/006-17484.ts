//https://www.acmicpc.net/problem/17484

const [input, ...lines]: string[] = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const [N, M] = input.split(' ').map(Number);
const pathMap = lines.map((line) => line.split(' ').map(Number));

const ds = [-1, 0, 1];
const totals: number[] = [];

const getTotalFuelCost = (rowIdx: number, colIdx: number, total: number, prevDirection: number = -2) => {
    total += pathMap[rowIdx][colIdx];
    if (rowIdx === N - 1) return totals.push(total);

    for (const colDirection of ds) {
        const [newRow, newCol] = [rowIdx + 1, colIdx + colDirection];
        if (newCol >= 0 && newCol < M && colDirection !== prevDirection) {
            getTotalFuelCost(newRow, newCol, total, colDirection);
        }
    }
};

for (let i = 0; i < M; i++) {
    getTotalFuelCost(0, i, 0);
}

console.log(Math.min(...totals));
