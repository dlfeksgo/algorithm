//https://school.programmers.co.kr/learn/courses/30/lessons/12947

export function solution(x: number) {
    return (
        x %
            Array.from(String(x))
                .map(Number)
                .reduce((a, b) => a + b) ===
        0
    );
}
