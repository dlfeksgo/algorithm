//https://www.acmicpc.net/problem/10998

const input = require("fs").readFileSync("/dev/stdin").toString().split("/n");

const line = input[0].split(" ");

console.log(Number(line[0]) * Number(line[1]));
