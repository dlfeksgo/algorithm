//https://school.programmers.co.kr/learn/courses/30/lessons/12941

export function solution(A: number[], B: number[]) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    let sum = 0;
    for (const [i, v] of A.entries()) {
        sum += v * B[i];
    }
    return sum;
}
