//https://school.programmers.co.kr/learn/courses/30/lessons/181923

export function solution(arr: number[], queries: number[][]) {
    return queries.map(([s, e, k]) => {
        const data = arr.slice(s, e + 1).filter((v) => v > k);
        return data.length === 0 ? -1 : Math.min(...data);
    });
}
