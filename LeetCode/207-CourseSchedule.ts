//https://leetcode.com/problems/course-schedule/description/

export function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const scheduleGraph: number[][] = Array.from(Array(numCourses), () => []);
    const completed: number[] = Array(numCourses).fill(0);
    const visited: number[] = Array(numCourses).fill(0);

    for (const [second, first] of prerequisites) {
        scheduleGraph[second].push(first);
    }

    const isNextCourse = (courseIdx: number): boolean => {
        if (completed[courseIdx]) return false;
        if (visited[courseIdx]) return true;

        completed[courseIdx] = 1;
        visited[courseIdx] = 1;

        for (const i of scheduleGraph[courseIdx]) {
            if (!isNextCourse(i)) return false;
        }

        completed[courseIdx] = 0;
        return true;
    };

    for (const i of scheduleGraph.keys()) {
        if (!isNextCourse(i)) return false;
    }

    return true;
}

canFinish(2, [[1, 0]]);
