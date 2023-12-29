//https://school.programmers.co.kr/learn/courses/30/lessons/176963

export function solution(
    name: string[],
    yearning: number[],
    photo: string[][],
) {
    const answer: number[] = [];
    const map = new Map();
    for (const [i, person] of name.entries()) {
        map.set(person, yearning[i]);
    }

    for (const group of photo) {
        let sum = 0;
        for (const person of group) {
            sum += map.get(person) ?? 0;
        }
        answer.push(sum);
    }
    return answer;
}
