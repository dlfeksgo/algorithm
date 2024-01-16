//https://school.programmers.co.kr/learn/courses/30/lessons/12943

export function solution(num: number) {
    let i = 0;
    if (num === 1) return 0;
    while (num !== 1 && i !== 500) {
        i++;
        if (num % 2 === 0) num /= 2;
        else num = num * 3 + 1;
    }
    return i >= 500 ? -1 : i;
}
