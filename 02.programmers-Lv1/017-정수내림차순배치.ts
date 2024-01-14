//https://school.programmers.co.kr/learn/courses/30/lessons/12933

export function solution(n: number) {
    return +String(n)
        .split('')
        .map(Number)
        .sort((a, b) => b - a)
        .join('');
}

solution(118372);
