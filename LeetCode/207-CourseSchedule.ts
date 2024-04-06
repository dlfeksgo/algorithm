//https://leetcode.com/problems/course-schedule/description/

//사이클이 존재하면 안된다.(순환이 되면 안된다)
export function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const adjacencyList: number[][] = Array.from({ length: numCourses }, () => []);
    const incomingEdges: number[] = Array(numCourses).fill(0);

    //adjacencyList의 idx는 선행 강의이고, 원소는 이 강의 이후에 들을 수 있는 것들이다.
    for (const [course, prereq] of prerequisites) {
        adjacencyList[prereq].push(course);
        incomingEdges[course]++;
    }

    const queue: number[] = [];
    let coursesTaken = 0;

    //선행 강의가 없다는 것은 바로 수강이 가능하다는 뜻이다.
    for (const [course, cnt] of incomingEdges.entries()) {
        if (!cnt) queue.push(course);
    }

    //수강이 가능한 강의가 없을 때까지 반복한다.
    while (queue.length) {
        const currentCourse = queue.shift()!;
        coursesTaken++;

        //현재 강의를 듣기 위한 선행 강의들을 순회한다.
        //해당하는 선행 강의의 수를 차감한다.
        for (const pre of adjacencyList[currentCourse]) {
            incomingEdges[pre]--;
            if (!incomingEdges[pre]) queue.push(pre);
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
