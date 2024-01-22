//https://school.programmers.co.kr/learn/courses/30/lessons/12918

export function solution(s: string) {
    const regex = /^\d{6}$|^\d{4}$/;
    return regex.test(s);
}
