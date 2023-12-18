//https://school.programmers.co.kr/learn/courses/30/lessons/42862

export function solution(n: number, lost: number[], reserve: number[]) {
    const students = Array(n).fill(1);

    for (const v of lost) {
        students[v - 1] = 0;
    }
    for (const v of reserve) {
        students[v - 1] += 1;
    }

    const transferUniform = (reserveIdx: number, lostIdx: number) => {
        if (students[reserveIdx] !== 2) return;
        students[reserveIdx] = 1;
        students[lostIdx] = 1;
    };

    for (const i of students.keys()) {
        if (students[i] === 0) transferUniform(i - 1, i);
        if (students[i] === 0) transferUniform(i + 1, i);
    }

    let answer = 0;
    for (const v of students) {
        if (v >= 1) answer += 1;
    }

    return answer;
}
