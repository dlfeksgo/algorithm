//https://www.acmicpc.net/problem/2480

let input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.split('\n')[0]
	.split(' ');

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

if (a === b && b === c) {
	console.log(10000 + a * 1000);
} else if (a === b) {
	console.log(1000 + a * 100);
} else if (a === c) {
	console.log(1000 + a * 100);
} else if (b === c) {
	console.log(1000 + b * 100);
} else {
	console.log(Math.max(a, b, c) * 100);
}
