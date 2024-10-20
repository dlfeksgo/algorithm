let divisor: string = require('fs').readFileSync('input.txt').toString().trim().split('\n')[1];

const DIVISORS = divisor.split(' ').map(Number);
let N: number;

if (DIVISORS.length === 1 && DIVISORS[0] !== 1) {
  N = DIVISORS[0] ** 2;
} else {
  N = Math.min(...DIVISORS) * Math.max(...DIVISORS);
}

console.log(N);
