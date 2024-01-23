//https://school.programmers.co.kr/learn/courses/30/lessons/131705

export function solution(number: number[]) {
    let count = 0;
    for (let i = 0; i < number.length; i++) {
        for (let j = i + 1; j < number.length; j++) {
            for (let k = j + 1; k < number.length; k++) {
                const sum = number[i] + number[j] + number[k];
                if (sum) continue;
                count++;
            }
        }
    }
    return count;
}

console.log(solution([-3, -2, -1, 0, 1, 2, 3]));

//첫 번째 풀이
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
