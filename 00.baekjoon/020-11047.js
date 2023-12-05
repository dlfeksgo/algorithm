//https://www.acmicpc.net/problem/11047

const [input, ...coins] = require("fs")
	.readFileSync("input.txt")
	.toString()
	.trim()
	.split("\n");

const n = Number(input.split(" ")[0]);
let k = Number(input.split(" ")[1]);
//내림차순 동전 배열 구하기 - 풀이 1
// const arr = coins.sort((a, b) => b - a).map(Number);

//내림차순 동전 배열 구하기 - 풀이 2
const arr = [];
for (let i = n - 1; i >= 0; i--) {
	arr.push(Number(coins[i]));
}

let result = 0;
for (const v of arr) {
	result += parseInt(k / Number(v));
	k %= Number(v);
}
console.log(result);
