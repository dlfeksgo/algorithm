//https://school.programmers.co.kr/learn/courses/30/lessons/131705

export function solution(number: number[]) {
    let count = 0;

    for (const [i, val1] of number.entries()) {
        const arr2 = number.slice(i + 1);
        for (const [j, val2] of arr2.entries()) {
            for (const val3 of arr2.slice(j + 1)) {
                if (val1 + val2 + val3) continue;
                count++;
            }
        }
    }
    return count;
}

console.log(solution([-3, -2, -1, 0, 1, 2, 3]));
