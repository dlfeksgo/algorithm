//https://www.acmicpc.net/problem/9498

const input: string[] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .split('\n');
const score = Number(input[0]);

let grade: string = '';
if (90 <= score && score <= 100) {
    grade = 'A';
} else if (80 <= score && score <= 89) {
    grade = 'B';
} else if (70 <= score && score <= 79) {
    grade = 'C';
} else if (60 <= score && score <= 69) {
    grade = 'D';
} else {
    grade = 'F';
}
console.log(grade);
