//https://school.programmers.co.kr/learn/courses/30/lessons/12932

export function solution(n: number) {
    return String(n).split('').reverse().map(Number);
}
