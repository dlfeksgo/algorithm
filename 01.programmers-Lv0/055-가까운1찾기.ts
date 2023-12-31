//https://school.programmers.co.kr/learn/courses/30/lessons/181898

export function solution(arr: number[], idx: number) {
    for (const [i, v] of arr.entries()) {
        if (i > idx && v === 1) return i;
    }
    return -1;
}
