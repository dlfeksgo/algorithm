//https://www.acmicpc.net/problem/2231

const input: string = require('fs').readFileSync('input.txt').toString();
const N = Number(input);

const solution = () => {
    for (let n = 0; n < N; n++) {
        let sum = n;

        for (const v of String(n)) {
            const v_num = Number(v);
            if (!v_num) break;
            sum += v_num;
        }

        if (sum === N) return n;
    }
    return 0;
};

console.log(solution());
