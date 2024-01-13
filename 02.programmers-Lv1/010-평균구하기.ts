//https://school.programmers.co.kr/learn/courses/30/lessons/12944

export function solution(arr: number[]) {
    return arr.reduce((a, b) => a + b) / arr.length;
}
