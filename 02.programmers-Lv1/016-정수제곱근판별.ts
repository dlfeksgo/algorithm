//https://school.programmers.co.kr/learn/courses/30/lessons/12934

export function solution(n: number) {
    const root = Math.sqrt(n);
    return Number.isInteger(root) ? (root + 1) ** 2 : -1;
}
