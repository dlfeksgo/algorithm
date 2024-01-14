//https://school.programmers.co.kr/learn/courses/30/lessons/76501

export function solution(absolutes: number[], signs: boolean[]) {
    return signs
        .map((v, i) => (v ? +absolutes[i] : -absolutes[i]))
        .reduce((a, b) => a + b);
}
