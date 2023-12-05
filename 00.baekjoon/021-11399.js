//https://www.acmicpc.net/problem/11399

const [n, minutes] = require("fs")
	.readFileSync("input.txt")
	.toString()
	.trim()
	.split("\n");

let sum = 0;
let num = 0;
const arr = minutes
	.split(" ")
	.map(Number)
	.sort((a, b) => a - b);
for (let i = 0; i < Number(n); i++) {
	num += arr[i];
	sum += num;
}
console.log(sum);

//첫 번째 풀이
// const input = require('fs')
// 	.readFileSync('input.txt')
// 	.toString()
// 	.trim()
// 	.split('\n');

// const minutes = input[1]
// 	.split(' ')
// 	.map(Number)
// 	.sort((a, b) => a - b);

// // let arr = [];
// // const lastNum = minutes.reduce((a, b) => {
// // 	arr.push(a);
// // 	return a + b;
// // });
// // arr.push(lastNum);
// // console.log(arr.reduce((a, b) => a + b));
