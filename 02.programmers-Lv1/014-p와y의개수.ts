//https://school.programmers.co.kr/learn/courses/30/lessons/12916

export function solution(s: string) {
    const map = new Map();
    for (const v of s.toUpperCase()) {
        map.set(v, (map.get(v) ?? 0) + 1);
    }
    return map.get('P') === map.get('Y');
}
