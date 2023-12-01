//https://www.acmicpc.net/problem/2752

const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const arr = input.map(Number);
arr.sort(function (a, b) {
	return a - b;
});
console.log(arr.join(" "));
