//https://www.acmicpc.net/problem/16173

const [n, ...lines]: string[] = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const N = Number(n);
const gameMap = lines.map((line) => line.split(' ').map(Number));

const getGameResult = (row: number, col: number) => {
    let dist = gameMap[row][col];

    if (dist === -1) return true;
    if (!dist) return false;

    const ds = [
        [dist, 0],
        [0, dist],
    ];
    for (let i = 0; i < 2; i++) {
        const [curR, curC] = [row + ds[i][0], col + ds[i][1]];
        if (curR >= 0 && curC >= 0 && curR < N && curC < N) {
            const result = getGameResult(curR, curC);
            if (result) return true;
        }
    }
    return false;
};

getGameResult(0, 0) ? console.log('HaruHaru') : console.log('Hing');
