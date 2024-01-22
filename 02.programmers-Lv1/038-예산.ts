//https://school.programmers.co.kr/learn/courses/30/lessons/12982

export function solution(d: number[], budget: number) {
    d.sort((a, b) => a - b);
    for (const [i, v] of d.entries()) {
        budget -= v;
        if (budget < 0) return i;
    }
    return d.length;
}
