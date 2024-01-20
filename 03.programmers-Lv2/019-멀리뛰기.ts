//https://school.programmers.co.kr/learn/courses/30/lessons/12914

export function solution(n: number) {
    if (n === 1) return 1;
    const count = [1, 1];
    for (let i = 2; i <= n + 1; i++) {
        count[i] = count[i - 2] + count[i - 1];
    }
    return count[n] % 1234567;
}
