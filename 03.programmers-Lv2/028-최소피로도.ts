//https://school.programmers.co.kr/learn/courses/30/lessons/87946

export function solution(k: number, dungeons: number[][]) {
    const visited = Array(dungeons.length).fill(false);
    let maxDungeons = 0;

    const recursiveDungeonExplore = (remainingFatigue: number, count: number) => {
        maxDungeons = Math.max(maxDungeons, count);
        for (const [i, [requiredFatigue, consumedFatigue]] of dungeons.entries()) {
            if (!visited[i] && remainingFatigue >= requiredFatigue) {
                visited[i] = true;
                recursiveDungeonExplore(remainingFatigue - consumedFatigue, count + 1);
                visited[i] = false;
            }
        }
    };
    recursiveDungeonExplore(k, 0);
    return maxDungeons;
}

console.log(
    solution(80, [
        [80, 20],
        [50, 40],
        [30, 10],
    ]),
);
