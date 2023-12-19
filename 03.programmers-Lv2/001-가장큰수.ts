//https://school.programmers.co.kr/learn/courses/30/lessons/42746

export function solution(numbers: number[]) {
    const strArr = numbers.map(String).sort((a, b) => +(b + a) - +(a + b));
    return strArr.join('')[0] === '0' ? '0' : strArr.join('');
}
