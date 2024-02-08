//https://school.programmers.co.kr/learn/courses/30/lessons/42889

export function solution(N: number, stages: number[]) {
    const stageMap = new Map();
    const failureRate: number[][] = [];

    for (const num of stages) {
        const val = stageMap.get(num) ?? 0;
        stageMap.set(num, val + 1);
    }
    for (let i = 1; i <= N; i++) {
        const players = stages.filter((v) => v >= i).length;
        const stage = stageMap.get(i) ?? 0;

        failureRate.push([i, stage / players]);
    }
    return failureRate.sort((a, b) => b[1] - a[1]).map((v) => v[0]);
}

console.log(solution(4, [4, 4, 4, 4, 4]));
