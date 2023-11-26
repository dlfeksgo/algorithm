//https://www.acmicpc.net/problem/2739

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n')[0];
for (let i = 1; i <= 9; i++) {
	console.log(`${Number(input)} * ${i} = ${Number(input) * i}`);
}
