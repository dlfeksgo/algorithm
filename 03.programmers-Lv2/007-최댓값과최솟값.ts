//https://school.programmers.co.kr/learn/courses/30/lessons/12939

export function solution(s: string) {
    const strArr = s.split(' ').map(Number);
    return `${Math.min(...strArr)} ${Math.max(...strArr)}`;
}
