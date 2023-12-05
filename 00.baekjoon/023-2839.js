//https://www.acmicpc.net/problem/2839

const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split(" ")[0];

let num = Number(input);
let result = 0;
let flag = false;
//num이 0이 되거나 0보다 작아질 때까지 반복
while (num >= 0) {
	if (num % 5 === 0) {
		result += parseInt(num / 5);
		flag = true;
		break;
	}
	num -= 3;
	result += 1;
}
if (!flag) {
	result = -1;
}
console.log(result);
