//https://www.acmicpc.net/problem/1789

const n: number = require('fs').readFileSync('input.txt').toString();

let total = 0;
let idx = 0;
while (total <= n) {
    //전체합이 주어진 숫자 n과 같거나 작으면 while문을 실행한다.
    idx += 1;
    total += idx;
}
console.log(idx - 1);
