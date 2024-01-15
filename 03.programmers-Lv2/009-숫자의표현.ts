//https://school.programmers.co.kr/learn/courses/30/lessons/12924

export function solution(n: number) {
    let count = 1;
    for (let i = 1; i < n / 2; i++) {
        let sum = 0;
        for (let j = i; j <= n; j++) {
            sum += j;
            if (sum > n) break;
            else if (sum === n) {
                count++;
                break;
            }
        }
    }
    return count;
}
