//https://school.programmers.co.kr/learn/courses/30/lessons/131705

export function solution(number: number[]) {
    let count = 0;
    const student = number.entries();
    for (const [i, val1] of student) {
        for (const [j, val2] of student) {
            for (const [k, val3] of student) {
                if (j <= i || k <= j) continue;
                const sum = val1 + val2 + val3;
                if (sum) continue;
                count++;
            }
        }
    }
    return count;
}

console.log(solution([-3, -2, -1, 0, 1, 2, 3]));

//첫 시도
// let count = 0;
// while (number.length >= 3) {
//     const student = number.pop()!;
//     let target = student;
//     for (let i = 0; i < number.length; i++) {
//         target += number[i];
//         for (let j = i + 1; j < number.length; j++) {
//             target += number[j];
//             if (target === 0) count++;
//             target -= number[j];
//         }
//         target -= number[i];
//     }
// }
// return count;

//02
// let count = 0;
// for (let i = 0; i < number.length; i++) {
//     for (let j = i + 1; j < number.length; j++) {
//         for (let k = j + 1; k < number.length; k++) {
//             const sum = number[i] + number[j] + number[k];
//             if (sum) continue;
//             count++;
//         }
//     }
// }
// return count;

// let count = 0;
// const student = number.entries();
// for (const [i, val1] of student) {
//     for (const [j, val2] of student) {
//         for (const [k, val3] of student) {
//             if (j <= i || k <= j) continue;
//             const sum = val1 + val2 + val3;
//             if (sum) continue;
//             count++;
//         }
//     }
// }
// return count;
