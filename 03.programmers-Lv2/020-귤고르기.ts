//https://school.programmers.co.kr/learn/courses/30/lessons/138476

export function solution(k: number, tangerine: number[]) {
    let answer = 0;
    const map = new Map();
    for (const v of tangerine) {
        map.set(v, (map.get(v) ?? 0) + 1);
    }

    const sortedArr = [...map].sort((a, b) => b[1] - a[1]);

    for (const [, count] of sortedArr) {
        if (count >= k) {
            answer++;
            break;
        } else {
            k -= count;
            answer++;
        }
    }
    return answer;
}
