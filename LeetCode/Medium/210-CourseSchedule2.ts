//https://leetcode.com/problems/course-schedule-ii/?envType=study-plan-v2&envId=graph-theory

export function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const schedule: number[][] = Array.from({ length: numCourses }, () => []);
    const incomingEdges = Array(numCourses).fill(0);

    for (const [second, first] of prerequisites) {
        schedule[first].push(second);
        incomingEdges[second]++;
    }

    const queue: number[] = [];
    const orders: Set<number> = new Set();

    const tryCourseProseed = (course: number) => {
        if (!incomingEdges[course]) queue.push(course);
    };

    for (let i = 0; i < numCourses; i++) {
        tryCourseProseed(i);
    }

    while (queue.length) {
        const curCourse = queue.pop()!;
        orders.add(curCourse);

        for (const pre of schedule[curCourse]) {
            incomingEdges[pre]--;
            tryCourseProseed(pre);
        }
    }

    return orders.size === numCourses ? [...orders] : [];
}
