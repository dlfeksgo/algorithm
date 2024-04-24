//https://leetcode.com/problems/find-the-town-judge/description/?envType=study-plan-v2&envId=graph-theory

export function findJudge(n: number, trust: number[][]): number {
    const trustCounts = Array(n + 1).fill(0);

    for (const [from, to] of trust) {
        trustCounts[from]--;
        trustCounts[to]++;
    }

    for (const [i, p] of trustCounts.entries()) {
        if (!i) continue;
        if (p === n - 1) return i;
    }

    return -1;
}
