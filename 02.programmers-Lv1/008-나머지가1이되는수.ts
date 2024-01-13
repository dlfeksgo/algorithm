//https://school.programmers.co.kr/learn/courses/30/lessons/87389

export function solution(n: number) {
    let x = 0;
    while (n > 0) {
        if (n % x === 1) return x;
        x++;
    }
}
