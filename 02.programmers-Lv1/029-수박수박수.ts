//https://school.programmers.co.kr/learn/courses/30/lessons/12922

export function solution(n: number) {
    const str = '수박'.repeat(n / 2);
    return n % 2 === 0 ? str : str + '수';
}
