//https://www.acmicpc.net/problem/1946

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const testCase = Number(input[0]);
let caseNum = 1; //첫 번째 케이스 인원 인덱스

for (let tc = 0; tc < testCase; tc++) {
	let n = Number(input[caseNum]); //케이스 인원
	let arr = [];
	for (let i = caseNum + 1; i <= caseNum + n; i++) {
		let data = input[i].split(" ").map(Number);
		arr.push(data);
	}
	arr.sort((a, b) => a[0] - b[0]);
	let count = 0;
	let minValue = 100001;
	for (const [, y] of arr) {
		if (y < minValue) {
			minValue = y;
			count += 1;
		}
	}
	console.log(count);
	caseNum += n + 1;
}
