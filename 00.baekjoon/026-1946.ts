//https://www.acmicpc.net/problem/1946

const [$n, ...lines]: string[] = require('fs')
    .readFileSync('input.txt')
    .toString()
    .split('\n');

const n = Number($n);
let caseIdx = 0;
const cases: number[][] = lines.map((v) => v.split(' ').map(Number));
for (let i = 0; i < n; i++) {
    const caseCount = cases[caseIdx][0];
    const slicedArr = cases.slice(caseIdx + 1, caseCount + caseIdx + 1);
    slicedArr.sort((a, b) => a[0] - b[0]); //서류 성적순 1차 정렬로 첫 번째 지원자는 무조건 통과함
    let minValue = 10001; //10000등까지 있으므로
    let count = 0;
    for (const [, y] of slicedArr) {
        if (y < minValue) {
            minValue = y;
            count += 1;
        }
    }
    console.log(count);
    caseIdx += caseCount + 1;
}

// const testCase = Number(input[0]);
// let caseNum = 1; //첫 번째 케이스 인원 인덱스

// for (let tc = 0; tc < testCase; tc++) {
// 	let n = Number(input[caseNum]); //케이스 인원
// 	let arr = [];
// 	for (let i = caseNum + 1; i <= caseNum + n; i++) {
// 		let data = input[i].split(" ").map(Number);
// 		arr.push(data);
// 	}
// 	arr.sort((a, b) => a[0] - b[0]);
// 	let count = 0;
// 	let minValue = 100001;
// 	for (const [, y] of arr) {
// 		if (y < minValue) {
// 			minValue = y;
// 			count += 1;
// 		}
// 	}
// 	console.log(count);
// 	caseNum += n + 1;
// }
