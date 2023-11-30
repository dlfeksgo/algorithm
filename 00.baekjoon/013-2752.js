//https://www.acmicpc.net/problem/2752

const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const arr = input.map(Number);
arr.sort(function (a, b) {
  return a - b;
});
let answer = "";
arr.forEach((v) => (answer += v + " "));
console.log(answer);
