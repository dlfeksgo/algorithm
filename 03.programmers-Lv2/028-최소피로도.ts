//https://school.programmers.co.kr/learn/courses/30/lessons/87946

export function solution(k: number, dungeons: number[][]) {
    const visited = Array(dungeons.length).fill(false);
    let maxDungeons = 0;

    const exploreDungeon = (idx: number, remainingFatigue: number, count: number) => {
        maxDungeons = Math.max(maxDungeons, count);
        if (visited[idx]) return;
        visited[idx] = true;
        for (const [i, [requiredFatigue, consumedFatigue]] of dungeons.entries()) {
            if (remainingFatigue >= requiredFatigue) {
                exploreDungeon(i, remainingFatigue - consumedFatigue, count + 1);
            }
        }
        visited[idx] = false;
    };
    exploreDungeon(0, k, 0);
    return maxDungeons;
}

console.log(
    solution(80, [
        [80, 20],
        [50, 40],
        [30, 10],
    ]),
);
