//https://www.acmicpc.net/problem/10869

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("/n")[0]
  .split(" ");
const a = Number(input[0]);
const b = Number(input[1]);
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b, 10));
console.log(a % b);
