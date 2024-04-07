//https://leetcode.com/problems/course-schedule/description/

//사이클이 존재하면 안된다.(순환이 되면 안된다)
export function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const adjacencyList: number[][] = Array.from({ length: numCourses }, () => []);
    const incomingEdges: number[] = Array(numCourses).fill(0);

    for (const [course, prereq] of prerequisites) {
        adjacencyList[prereq].push(course);
        incomingEdges[course]++;
    }

    const queue: number[] = [];
    let coursesTaken = 0;

    //선행 강의가 없다는 것은 바로 수강이 가능하다는 뜻이다.
    function canCourseProceed(course: number) {
        if (!incomingEdges[course]) queue.push(course);
    }

    //for...of문 대체로 course idx로만 체크
    for (let i = 0; i < numCourses; i++) {
        canCourseProceed(i);
    }

    while (queue.length) {
        const currentCourse = queue.shift()!;
        coursesTaken++;

        for (const pre of adjacencyList[currentCourse]) {
            if (!--incomingEdges[pre]) canCourseProceed(pre);
        }
    }
    return coursesTaken === numCourses;
}

console.log(
    canFinish(2, [
        [0, 1],
        [1, 0],
    ]),
);
