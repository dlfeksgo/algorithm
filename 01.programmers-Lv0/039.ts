//https://school.programmers.co.kr/learn/courses/30/lessons/181914

export function solution(number: string) {
    let sum = 0;
    for (const str of number) {
        sum += Number(str);
    }
    return sum % 9;
}
