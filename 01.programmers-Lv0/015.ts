//https://school.programmers.co.kr/learn/courses/30/lessons/181938

export function solution(a: number, b: number): number {
    const str = `${a}${b}`;
    return Math.max(Number(str), 2 * a * b);
}
