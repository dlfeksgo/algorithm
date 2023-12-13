//https://school.programmers.co.kr/learn/courses/30/lessons/181934

export function solution(
    ineq: string,
    eq: string,
    n: number,
    m: number,
): number {
    let result: boolean = false;
    if (ineq === '>' && eq === '=') {
        result = n >= m;
    } else if (ineq === '<' && eq === '=') {
        result = n <= m;
    } else if (ineq === '>' && eq === '!') {
        result = n > m;
    } else if (ineq === '<' && eq === '!') {
        result = n < m;
    }
    return result ? 1 : 0;
}
