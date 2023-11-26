//https://www.acmicpc.net/problem/2438

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n')[0];
let n = Number(input);
let arr = [];
for (let i = 0; i < n; i++) {
	let answer = '';
	for (let j = 0; j <= i; j++) {
		answer += '*';
	}
	arr.push(answer);
}
arr.forEach((v) => console.log(v));
