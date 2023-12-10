//https://school.programmers.co.kr/learn/courses/30/lessons/181936

export function solution(number: number, n: number, m: number) {
    const a = number % n === 0;
    const b = number % m === 0;
    return a && b ? 1 : 0;
}
