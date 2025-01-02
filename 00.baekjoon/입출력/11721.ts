//https://www.acmicpc.net/problem/11721

const input: string = require('fs').readFileSync('input.txt').toString().trim();
const result: string[] = [];

const quotient = Math.ceil(Number(input.length) / 10);
const splitedInput = input.split('');

for (let i = 0; i < quotient; i++) {
  result.push(splitedInput.slice(i * 10, (i + 1) * 10).join(''));
}

console.log(result.join('\n'));
