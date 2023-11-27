//https://www.acmicpc.net/problem/15552

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const n = Number(input[0]);
let result = "";
for (let i = 1; i <= n; i++) {
  const arr = input[i].split(" ").map(Number);
  result += arr[0] + arr[1] + "\n";
}
console.log(result);
