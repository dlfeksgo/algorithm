//https://school.programmers.co.kr/learn/courses/30/lessons/42862

export function solution(n: number, lost: number[], reserve: number[]) {
    const students = Array(n).fill(1);

    for (const v of lost) {
        students[v - 1] = 0;
    }
    for (const v of reserve) {
        students[v - 1] += 1;
    }
    const compare = (i: number) => {
        if (students[i - 1] === 2) return (students[i - 1] = 1);
        else if (students[i + 1] === 2) return (students[i + 1] = 1);
    };

    for (const [i, student] of students.entries()) {
        const result = student === 0 && compare(i);
        if (result) students[i] = 1;
    }

    let answer = 0;
    for (const v of students) {
        if (v >= 1) answer += 1;
    }

    return answer;
}

console.log(solution(5, [2, 4], [3]));
