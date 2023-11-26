//https://www.acmicpc.net/problem/10869

let input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.split('/n')[0]
	.split(' ');
let a = Number(input[0]);
let b = Number(input[1]);
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b));
console.log(a % b);
