//https://school.programmers.co.kr/learn/courses/30/lessons/42840

export function solution(answers: number[]) {
    const students: number[][] = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    ];
    const score = [0, 0, 0];
    for (const [i, answer] of answers.entries()) {
        for (const [j, student] of students.entries()) {
            if (answer === student[i % student.length]) score[j]++;
        }
    }
    const maxScore = Math.max(...score);
    return score.map((v, i) => (maxScore === v ? i + 1 : -1)).filter((v) => v > 0);
}
