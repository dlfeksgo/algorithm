//https://school.programmers.co.kr/learn/courses/30/lessons/12918

export function solution(s: string) {
    const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const length = s.length;
    if (length === 4 || length === 6) {
        if ([...s].filter((v) => number.includes(Number(v))).length === length)
            return true;
    }
    return false;
}
