//https://school.programmers.co.kr/learn/courses/30/lessons/42862

export function solution(n: number, lost: number[], reserve: number[]) {
    const students = Array(n).fill(1);

    for (const v of lost) {
        students[v - 1] = 0;
    }
    for (const v of reserve) {
        students[v - 1] += 1;
    }

    for (const [i, student] of students.entries()) {
        if (student === 0 && students[i - 1] === 2) {
            students[i] = 1;
            students[i - 1] = 1;
        } else if (student === 0 && students[i + 1] === 2) {
            students[i] = 1;
            students[i + 1] = 1;
        }
    }

    let answer = 0;
    for (const v of students) v >= 1 && answer++;

    return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
