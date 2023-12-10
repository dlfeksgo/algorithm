//https://www.acmicpc.net/problem/1181

const [, ...lines]: string[] = require('fs')
    .readFileSync('input.txt')
    .toString()
    .trim()
    .split('\n');

//다른 풀이: Array.from(words)
const words: string[] = [...new Set(lines)];
words.sort((a, b) => {
    if (a.length !== b.length) return a.length - b.length;
    else {
        if (a < b) return -1;
        else if (a > b) return 1;
        else return 0;
    }
});

console.log(words.join('\n'));
