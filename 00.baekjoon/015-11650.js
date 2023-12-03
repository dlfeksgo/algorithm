//https://www.acmicpc.net/problem/11650

const [, ...numbers] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");
let answer = "";
const arr = numbers.map((v) => v.split(" ").map(Number));
arr.sort(function (a, b) {
	return a[0] - b[0] === 0 ? a[1] - b[1] : a[0] - b[0];
});
for (const v of arr) {
	answer += v[0] + " " + v[1] + "\n";
}
console.log(answer);

// 다른 풀이 1
// let data = [];
// for (let i = 0; i < Number(input[0]); i++) {
// 	let [x, y] = input[i].split(' ').map(Number);
// 	data.push([x, y]);
// }
