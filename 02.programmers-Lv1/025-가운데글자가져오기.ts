//https://school.programmers.co.kr/learn/courses/30/lessons/12903

export function solution(s: string) {
    const startIdx = Math.floor(s.length / 2);
    const endIdx = startIdx + 1;
    return s.length % 2 === 0
        ? s.slice(startIdx - 1, endIdx)
        : s.slice(startIdx, endIdx);
}
