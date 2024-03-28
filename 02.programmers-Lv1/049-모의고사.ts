//https://school.programmers.co.kr/learn/courses/30/lessons/42840

const getScoreByStudents = (answers: number[], students: Record<string, number[]>) => {
    const result: number[] = [];
    for (const [i, key] of Object.keys(students).entries()) {
        result[i] = answers.filter(
            (answer, idx: number) => answer === students[key][idx % students[key].length],
        ).length;
    }
    return result;
};

export function solution(answers: number[]) {
    const students: Record<string, number[]> = {
        one: [1, 2, 3, 4, 5],
        two: [2, 1, 2, 3, 2, 4, 2, 5],
        three: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    };

    const scoreByStudents = getScoreByStudents(answers, students);
    const maxScore = Math.max(...scoreByStudents);
    return scoreByStudents.map((v, i) => (maxScore === v ? i + 1 : -1)).filter((v) => v > 0);
}

console.log(solution([1, 2, 3, 4, 5]));
