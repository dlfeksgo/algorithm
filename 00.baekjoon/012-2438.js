//https://www.acmicpc.net/problem/2438

const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.split("\n")[0];
const n = Number(input);
const arr = [];
for (let i = 0; i < n; i++) {
	let answer = "";
	for (let j = 0; j <= i; j++) {
		answer += "*";
	}
	arr.push(answer);
}
console.log(arr.join("\n"));
