//https://www.acmicpc.net/problem/1427

const [n] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const arr = [];
for (const v of n) {
  arr.push(v);
}
arr.sort((a, b) => b - a);
console.log(arr.join(""));
