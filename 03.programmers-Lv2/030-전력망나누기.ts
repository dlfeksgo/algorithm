//https://school.programmers.co.kr/learn/courses/30/lessons/86971

export function getMinTowerCount(n: number, wires: [number, number][]) {
    let min = n;
    const tree: number[][] = Array.from(Array(n + 1), () => []);

    const getTotalCount = (start: number, interruption: number) => {
        const visited: boolean[] = Array(n + 1).fill(false);
        let count = 0;
        const queue = [start];

        while (queue.length) {
            const startIdx = queue.shift()!;
            if (visited[startIdx]) continue;
            visited[startIdx] = true;
            for (const v of tree[startIdx]) {
                if (v !== interruption) {
                    queue.push(v);
                }
            }
            count++;
        }
        return count;
    };

    for (const [start, end] of wires) {
        tree[start].push(end);
        tree[end].push(start);
    }

    for (const [start, end] of wires) {
        min = Math.min(Math.abs(getTotalCount(start, end) - getTotalCount(end, start)), min);
    }
    return min;
}
