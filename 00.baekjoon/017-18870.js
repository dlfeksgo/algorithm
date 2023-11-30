//https://www.acmicpc.net/problem/18870

const [n, ...numbers] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr = numbers[0].split(" ").map(Number);
const uniqueArr = [...new Set(arr)].sort((a, b) => a - b);
const map = new Map();
uniqueArr.forEach((v, i) => map.set(v, i));
let result = "";
for (const v of arr) {
  result += map.get(v) + " ";
}
console.log(result);

//첫 번째 시도에 for문 중첩으로 시간초과
// let result = [];
// const arr = numbers[0].split(' ').map(Number);
// for (let i = 0; i < arr.length; i++) {
// 	const target = arr.slice(i, i + 1);
// 	let newArr = [];
// 	for (const v of arr) {
// 		target > v && newArr.push(v);
// 	}
// 	result.push([...new Set(newArr)].length);
// }

// console.log(result.join(' '));
