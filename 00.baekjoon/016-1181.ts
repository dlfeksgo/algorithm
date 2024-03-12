//https://www.acmicpc.net/problem/1181

const [, ...lines]: string[] = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const words: string[] = [...new Set(lines)];
words.sort((a, b) => {
    if (a.length !== b.length) return a.length - b.length;
    else return a < b ? -1 : 1;
});

console.log(words.join('\n'));
