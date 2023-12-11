//https://school.programmers.co.kr/learn/courses/30/lessons/181923

export function solution(arr: number[], queries: number[][]) {
    const result = [];
    for (const [s, e, k] of queries) {
        const data = arr.slice(s, e + 1).filter((v) => v > k);
        result.push(data.length === 0 ? -1 : Math.min(...data));
    }
    return result;
}
