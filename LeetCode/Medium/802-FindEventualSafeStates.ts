//https://leetcode.com/problems/find-eventual-safe-states/description/

function eventualSafeNodes(graph: number[][]): number[] {
    const safeNodes: Set<number> = new Set();
    const visited: Set<number> = new Set();
    const answer: number[] = [];

    const isSafeNode = (node: number) => {
        if (safeNodes.has(node)) return 0;
        if (visited.has(node)) return 1;

        safeNodes.add(node);
        visited.add(node);

        for (const v of graph[node] ?? []) {
            if (!isSafeNode(v)) return 0;
        }

        safeNodes.delete(node);
        return 1;
    };

    for (const i of graph.keys()) {
        isSafeNode(i);
    }

    for (const i of graph.keys()) {
        if (!safeNodes.has(i)) answer.push(i);
    }

    return answer;
}

console.log(eventualSafeNodes([[1, 2], [2, 3], [5], [0], [5], [], []]));
