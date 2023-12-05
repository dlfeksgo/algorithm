//https://www.acmicpc.net/problem/1789

const input = require("fs").readFileSync("/dev/stdin").toString();
let sum = 0;
let current = 0;
while (sum <= Number(input)) {
	current += 1;
	sum += current;
}
console.log(current - 1);

//첫 풀이
// const input = require('fs').readFileSync('input.txt').toString();
// let sum = 0;
// let lastIdx = 0;
// for (let i = 1; sum <= Number(input); i++) {
// 	sum += i;
// 	if (sum <= Number(input)) {
// 		lastIdx = i;
// 	}
// }
// console.log(lastIdx);
