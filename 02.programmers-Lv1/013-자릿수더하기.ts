//https://school.programmers.co.kr/learn/courses/30/lessons/12931

export function solution(n: number) {
    return Array.from(String(n))
        .map(Number)
        .reduce((a, b) => a + b);
}
