//https://www.acmicpc.net/problem/2750

const [n, ...numbers] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");
const arr = numbers.map(Number);
arr.sort((a, b) => a - b);
console.log(arr.join("\n"));
