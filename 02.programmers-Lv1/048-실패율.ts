//https://school.programmers.co.kr/learn/courses/30/lessons/42889

export function solution(N: number, stages: number[]) {
    const map = new Map();
    for (let i = 1; i <= N; i++) {
        const players = stages.filter((v) => v >= i).length;
        const stage = stages.filter((v) => v === i).length;
        map.set(i, stage / players);
    }
    return [...map].sort((a, b) => b[1] - a[1]).map((v) => v[0]);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
