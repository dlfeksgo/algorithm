//https://school.programmers.co.kr/learn/courses/30/lessons/12981

export function solution(n: number, words: string[]) {
    const map = new Map();
    for (const [i, v] of words.entries()) {
        if (i === 0) {
            map.set(v, i + 1);
            continue;
        }
        if (map.get(v) || words[i - 1].slice(-1) !== v.slice(0, 1)) {
            return [(i % n) + 1, Math.floor(i / n + 1)];
        }
        map.set(v, i + 1);
    }
    return [0, 0];
}
