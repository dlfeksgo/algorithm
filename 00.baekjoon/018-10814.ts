//https://www.acmicpc.net/problem/10814

const [, ...lines]: string[] = require('fs')
    .readFileSync('input.txt')
    .toString()
    .trim()
    .split('\n');

const people: (string | number)[][] = lines.map((v) => {
    const [age, name]: string[] = v.split(' ');
    return [Number(age), name];
});

people.sort((a, b) => +a[0] - +b[0]);

const outputs = people.map(([age, name]) => `${age} ${name}`);

console.log(outputs.join('\n'));

//속도 느림
// for (const [age, name] of people) {
//     console.log(age + ' ' + name);
// }
