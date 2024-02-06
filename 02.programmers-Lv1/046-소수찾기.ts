//https://school.programmers.co.kr/learn/courses/30/lessons/12921

export function solution(n: number) {
    const isPrimes = Array(n + 1).fill(true);
    isPrimes[0] = false;
    isPrimes[1] = false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        for (let j = i * i; j <= n; j += i) {
            if (!isPrimes[j]) continue;
            if (j % i === 0) isPrimes[j] = false;
        }
    }

    return isPrimes.filter((v) => v === true).length;
}
// export function solution(n: number) {
// const set = new Set();

// for (let i = 2; i <= Math.sqrt(n); i++) {
//     for (let j = i * i; j <= n; j += i) {
//         if (i !== 2 && i % 2 === 0) continue;
//         if (i !== 3 && i % 3 === 0) continue;
//         if (i !== 5 && i % 5 === 0) continue;
//         if (i !== 7 && i % 7 === 0) continue;
//         if (j % i === 0) set.add(j);
//     }
// }

// return n - set.size - 1;
// }
