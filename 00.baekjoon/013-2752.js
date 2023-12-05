//https://www.acmicpc.net/problem/2752

const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const arr = input.map(Number);
arr.sort((a, b) => a - b);
console.log(arr.join(" "));
