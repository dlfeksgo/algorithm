//https://www.acmicpc.net/problem/2309

const dwarfs: number[] = require('fs').readFileSync('input.txt').toString().trim().split('\n').map(Number);
const maxHeight = 100;
const totalDwarfsHeight = dwarfs.reduce((x, y) => x + y);

const findDwarfs = (total: number, maxSum: number) => {
    for (const [v1, v2] of combination(dwarfs, 2)) {
        if (v1 + v2 === total - maxSum) {
            return dwarfs.filter((x) => x !== v1 && x !== v2);
        }
    }
    throw new Error();
};

function* combination<T>(xs: T[], pick: number): Iterable<T[]> {
    if (xs.length === 0 || pick === 0) return yield [];

    const [first, ...rest] = xs;
    yield* combination(rest, pick);

    for (const i of combination(rest, pick - 1)) {
        yield [first, ...i];
    }
}

const result = findDwarfs(totalDwarfsHeight, maxHeight).sort((x, y) => x - y);
console.log(result.join('\n'));
