//https://school.programmers.co.kr/learn/courses/30/lessons/12921

export function solution(n: number) {
    const number = Array(n + 1)
        .fill(0)
        .map((_, i) => i);

    for (let i = 2; i <= Math.sqrt(n); i++) {
        for (let j = i * 2; j <= n; j += i) {
            if (!number[j]) continue;
            if (number[j] % i === 0) number[j] = 0;
        }
    }

    return number.filter((v) => v !== 0).length - 1;
}

// export function solution(n: number) {
//     const set = new Set();

//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         for (let j = i * i; j <= n; j += i) {
//             if (i !== 2 && i % 2 === 0) continue;
//             if (i !== 3 && i % 3 === 0) continue;
//             if (i !== 5 && i % 5 === 0) continue;
//             if (i !== 7 && i % 7 === 0) continue;
//             if (j % i === 0) set.add(j);
//         }
//     }

//     return n - set.size - 1;
// }
