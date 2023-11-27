//https://www.acmicpc.net/problem/2588

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const a = Number(input[0]);
const b = input[1];

const x_1 = Number(b[2]);
const x_2 = Number(b[1]);
const x_3 = Number(b[0]);

console.log(a * x_1);
console.log(a * x_2);
console.log(a * x_3);
console.log(a * b);
