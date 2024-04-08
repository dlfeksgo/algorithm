//https://school.programmers.co.kr/learn/courses/30/lessons/42861

//Kruskal
const find = (x: number, parents: number[]): number => {
    if (x !== parents[x]) {
        parents[x] = find(parents[x], parents);
    }
    return parents[x];
};

const union = (x: number, y: number, parents: number[]): boolean => {
    if (x < y) {
        parents[y] = x;
    } else {
        parents[x] = y;
    }
    return true;
};

type Edge = [number, number, number];
const getMinCost = (n: number, costs: Edge[]): number => {
    costs.sort((x, y) => x[2] - y[2]); // 1. 간선 정렬

    const parents: number[] = Array.from({ length: n }, (_, i) => i); // 2. 부모 노드: 모두 자기 자신이 부모

    let totalCost = 0;

    const findParentNode = (x: number, y: number) => {
        const parentX = find(x, parents);
        const parentY = x === y ? parentX : find(y, parents);
        return [parentX, parentY];
    };
    // 3. 모든 간선을 순회하며 최소 신장 트리 만들기
    for (const [nodeX, nodeY, cost] of costs) {
        const [parentX, parentY] = findParentNode(nodeX, nodeY);

        if (parentX === parentY) continue; //사이클 발생

        union(parentX, parentY, parents);
        totalCost += cost;
    }

    return totalCost;
};

console.log(
    getMinCost(5, [
        [0, 1, 5],
        [1, 2, 3],
        [2, 3, 3],
        [3, 1, 2],
        [3, 0, 4],
        [2, 4, 6],
        [4, 0, 7],
    ]),
);
