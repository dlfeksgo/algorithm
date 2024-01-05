//https://school.programmers.co.kr/learn/courses/30/lessons/42587

export function solution(priorities: number[], location: number) {
    let count = 0;
    const queue = priorities.map((v, i) => [v, i]);
    while (queue.length > 0) {
        const value = queue.shift() as number[];
        if (queue.some(([v]) => value[0] < v)) {
            queue.push(value);
        } else {
            count++;
            if (location === value[1]) return count;
        }
    }
}
