//https://www.acmicpc.net/problem/15552

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const n = Number(input[0]);
let result = "";
for (let i = 1; i <= n; i++) {
  const a = Number(input[i].split(" ")[0]);
  const b = Number(input[i].split(" ")[1]);
  result += a + b + "\n";
}
console.log(result);
