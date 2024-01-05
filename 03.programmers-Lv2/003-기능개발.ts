//https://school.programmers.co.kr/learn/courses/30/lessons/42586

export function solution(progresses: number[], speeds: number[]) {
    const requiredDays = progresses.map((v, i) =>
        Math.ceil((100 - v) / speeds[i]),
    );
    const answer = [];

    let target = requiredDays[0];
    let count = 1;

    for (const i of requiredDays.keys()) {
        if (i === 0) continue;
        if (target >= requiredDays[i]) count += 1;
        else {
            answer.push(count);
            count = 1;
            target = requiredDays[i];
        }
    }
    answer.push(count);
    return answer;
}
