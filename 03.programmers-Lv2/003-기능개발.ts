//https://school.programmers.co.kr/learn/courses/30/lessons/42586

export function solution(progresses: number[], speeds: number[]) {
    const answer = [];
    const requiredDays = progresses.map((v, i) =>
        Math.ceil((100 - v) / speeds[i]),
    );

    let target = requiredDays.splice(0, 1)[0];
    let count = 1;
    for (const day of requiredDays) {
        if (target >= day) count += 1;
        else {
            answer.push(count); //지금까지 함께 배포 가능한 수 push
            count = 1;
            target = day; //비교할 작업시간 교체
        }
    }
    answer.push(count);
    return answer;
}
