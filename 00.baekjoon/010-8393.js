//https://www.acmicpc.net/problem/8393

const input = require("fs").readFileSync("dev/stdin").toString().split("\n")[0];
let answer = 0;
for (let i = 1; i <= Number(input); i++) {
  answer += i;
}
console.log(answer);
