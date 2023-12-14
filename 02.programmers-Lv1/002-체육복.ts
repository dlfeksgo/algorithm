//https://school.programmers.co.kr/learn/courses/30/lessons/42862

export function solution(n: number, lost: number[], reserve: number[]) {
    const lost_student = lost
        .filter((v) => !reserve.includes(v))
        .sort((a, b) => a - b);
    let reserve_student = reserve
        .filter((v) => !lost.includes(v))
        .sort((a, b) => a - b);

    let maxNum = n - lost_student.length;

    if (!lost_student.length) return n;

    for (const l of lost_student) {
        if (reserve_student.includes(l - 1)) {
            reserve_student = reserve_student.filter((v) => v !== l - 1);
            maxNum += 1;
        } else if (reserve_student.includes(l + 1)) {
            reserve_student = reserve_student.filter((v) => v !== l + 1);
            maxNum += 1;
        }
    }
    return maxNum;
}
