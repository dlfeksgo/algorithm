//https://www.acmicpc.net/problem/1541
//혼자 풀지 못한 문제 - 괄호를 묶는다는 것을 문제처럼 받아들임

const input: string = require('fs').readFileSync('input.txt').toString().trim();
const minusGroup: string[] = input.split('-');

let minValue: number = 0;
for (const [i, num] of minusGroup.entries()) {
    const plusGroup = num
        .split('+')
        .map(Number)
        .reduce((pre, cur) => pre + cur);
    if (i === 0) {
        minValue += plusGroup;
    } else {
        minValue -= plusGroup;
    }
}
console.log(minValue);
