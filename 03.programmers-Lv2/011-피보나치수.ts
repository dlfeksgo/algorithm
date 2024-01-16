//https://school.programmers.co.kr/learn/courses/30/lessons/12945

export function solution(n: number) {
    let [a, b] = [0, 1];
    let val = 0;
    for (let i = 2; i <= n; i++) {
        val = (a + b) % 1234567;
        a = b;
        b = val;
    }
    return val;
}
