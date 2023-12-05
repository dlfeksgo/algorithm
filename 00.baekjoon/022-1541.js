//https://www.acmicpc.net/problem/1541
//혼자 풀지 못한 문제 - 괄호를 묶는다는 것을 문제처럼 받아들임

const input = require("fs").readFileSync("input.txt").toString().trim();
const arr = input.split("-");
let result = 0;
for (let i = 0; i < arr.length; i++) {
	const cur = arr[i]
		.split("+")
		.map(Number)
		.reduce((a, b) => a + b);
	if (i === 0) {
		result += cur;
	} else {
		result -= cur;
	}
}
console.log(result);
