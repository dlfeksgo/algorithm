//https://leetcode.com/problems/course-schedule/description/

export function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const graph: number[][] = Array.from(Array(numCourses), () => []);
    const completed: number[] = Array(numCourses).fill(0);
    const visited: number[] = Array(numCourses).fill(0);

    for (const [start, end] of prerequisites) {
        graph[start].push(end);
    }

    const dfs = (idx: number): boolean => {
        if (completed[idx]) return false;
        if (visited[idx]) return true;

        completed[idx] = 1;
        visited[idx] = 1;

        for (const i of graph[idx]) {
            if (!dfs(i)) return false;
        }

        completed[idx] = 0;
        return true;
    };

    for (const i of graph.keys()) {
        if (!dfs(i)) return false;
    }

    return true;
}
