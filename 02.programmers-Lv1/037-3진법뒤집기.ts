//https://school.programmers.co.kr/learn/courses/30/lessons/68935

export function solution(n: number) {
    return parseInt(n.toString(3).split('').reverse().join(''), 3);
}
