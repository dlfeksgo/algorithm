//https://www.acmicpc.net/problem/10448

const [, ...lines]: number[] = require('fs').readFileSync('input.txt').toString().trim().split('\n').map(Number);
const triNum: number[] = Array.from(Array(45), (_, i) => (i * (i + 1)) / 2).slice(1);

const solution = (target: number) => {
    for (const k1 of triNum) {
        for (const k2 of triNum) {
            for (const k3 of triNum) {
                if (k1 + k2 + k3 === target) return 1;
            }
        }
    }
    return 0;
};

for (const v of lines) {
    console.log(solution(v));
}
