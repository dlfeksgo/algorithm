//https://school.programmers.co.kr/learn/courses/30/lessons/87946

export function solution(k: number, dungeons: number[][]) {
    const counts: number[] = [];
    const visited = Array(dungeons.length).fill(false);
    const dfs = (cnt: number) => {
        for (const [i, [demand, fatigue]] of dungeons.entries()) {
            if (!visited[i] && k >= demand) {
                visited[i] = true;
                k -= fatigue;
                counts.push(cnt + 1); //if문 내로 진입하면 탐험이 가능하므로 cnt를 +1 해준다.
                dfs(cnt + 1);
                //dfs 재귀호출 내 for...of 순회가 끝나면 마지막 호출 시점의 idx 순회로 돌아온다.
                //A - B - C 순서로 탐색한 후 A - C - B 순서로 순회가 가능해진다.
                visited[i] = false;
                k += fatigue;
            }
        }
    };
    dfs(0);
    return Math.max(...counts);
}
