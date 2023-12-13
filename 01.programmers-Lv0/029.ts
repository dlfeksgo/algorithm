//https://school.programmers.co.kr/learn/courses/30/lessons/181924

export function solution(arr: number[], queries: number[][]) {
    for (const [i, j] of queries) {
        const data = arr[i];
        arr[i] = arr[j];
        arr[j] = data;
    }
    return arr;
}
