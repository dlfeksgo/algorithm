//https://school.programmers.co.kr/learn/courses/30/lessons/12906

export function solution(arr: number[]) {
    return arr.filter((v, i) => v !== arr[i + 1]);
}
