//https://school.programmers.co.kr/learn/courses/30/lessons/181949

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  const str = input[0];
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    let txt = "";
    if (str[i] === str[i].toUpperCase()) {
      txt = str[i].toLowerCase();
    } else {
      txt = str[i].toUpperCase();
    }
    arr.push(txt);
  }
  console.log(arr.join(""));
});
