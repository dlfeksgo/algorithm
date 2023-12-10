//https://school.programmers.co.kr/learn/courses/30/lessons/181924

export function solution(arr: number[], queries: number[][]) {
    for (const query of queries) {
        const data = arr[query[0]];
        arr[query[0]] = arr[query[1]];
        arr[query[1]] = data;
    }
    return arr;
}
