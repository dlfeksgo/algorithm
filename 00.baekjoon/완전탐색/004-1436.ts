//https://www.acmicpc.net/problem/1436

const n: number = Number(require('fs').readFileSync('input.txt').toString());

const findEndTitle = (end: number) => {
    let curTitle = 666;
    let part = 1;
    while (part !== end) {
        curTitle++;
        if (String(curTitle).includes('666')) part++;
    }
    return curTitle;
};

console.log(findEndTitle(n));
