//https://school.programmers.co.kr/learn/courses/30/lessons/42889

export function solution(N: number, stages: number[]) {
    const playersInProgressMap = new Map();
    const failureRate: number[][] = [];

    for (const stage of stages) {
        const val = playersInProgressMap.get(stage) ?? 0;
        playersInProgressMap.set(stage, val + 1);
    }

    for (let i = 1; i <= N; i++) {
        const unresolvedStagePlayers = playersInProgressMap.get(i) ?? 0;
        let solvedStagePlayers = 0;
        for (let j = i; j <= N + 1; j++) {
            solvedStagePlayers += playersInProgressMap.get(j) ?? 0;
        }
        failureRate.push([i, unresolvedStagePlayers / solvedStagePlayers]);
    }
    return failureRate.sort((a, b) => b[1] - a[1]).map((v) => v[0]);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
