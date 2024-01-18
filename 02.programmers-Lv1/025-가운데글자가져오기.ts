//https://school.programmers.co.kr/learn/courses/30/lessons/12903

export function solution(s: string) {
    const startIdx = Math.floor(s.length / 2);
    return s.length % 2 === 0
        ? s.slice(startIdx - 1, startIdx + 1)
        : s.slice(startIdx, startIdx + 1);
}
