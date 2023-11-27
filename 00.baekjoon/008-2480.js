//https://www.acmicpc.net/problem/2480

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")[0]
  .split(" ");

const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);
let result;

if (a === b && b === c) {
  result = 10000 + a * 1000;
} else if (a === b) {
  result = 1000 + a * 100;
} else if (a === c) {
  result = 1000 + a * 100;
} else if (b === c) {
  result = 1000 + b * 100;
} else {
  result = Math.max(a, b, c) * 100;
}

console.log(result);
