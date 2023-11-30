//https://www.acmicpc.net/problem/10814

const [n, ...data] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const arr = [];
for (let i = 0; i < Number(n); i++) {
  const [age, name] = data[i].split(" ");
  arr.push([Number(age), name]);
}
let answer = "";
arr.sort((a, b) => a[0] - b[0]);
for (const v of arr) {
  answer += v[0] + " " + v[1] + "\n";
}
console.log(answer);

//첫 번째 풀이 - stable sort 인지 못함
// let answer = '';
// const arr = [];
// for (let i = 0; i < Number(n); i++) {
// 	let d = data[i].split(' ');
// 	arr.push({ idx: i, age: Number(d[0]), name: d[1] });
// }
// arr.sort((a, b) => {
// 	if (a.age !== b.age) return a.age - b.age;
// 	else return a.idx - b.idx;
// });
// for (const v of arr) {
// 	answer += v.age + ' ' + v.name + '\n';
// }
// console.log(answer);
