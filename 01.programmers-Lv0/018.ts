//https://school.programmers.co.kr/learn/courses/30/lessons/181935

export function solution(n: number): number {
    let answer: number[] = [];
    if (n % 2 === 0) {
        const arr = Array(n)
            .fill(0)
            .map((v, i) => i + 1);
        answer = arr.filter((v) => v % 2 === 0).map((v) => v * v);
    } else {
        const arr = Array(n)
            .fill(0)
            .map((v, i) => i + 1);
        answer = arr.filter((v) => v % 2 !== 0);
    }
    return answer.reduce((a, b) => a + b);
}
