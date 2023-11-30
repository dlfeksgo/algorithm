//https://www.acmicpc.net/problem/2750

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const arr = input.slice(1).map(Number);
arr.sort(function (a, b) {
  return a - b;
});
let answer = "";
arr.forEach((v) => (answer += v + "\n"));
console.log(answer);
