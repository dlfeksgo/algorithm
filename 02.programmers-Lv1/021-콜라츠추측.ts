//https://school.programmers.co.kr/learn/courses/30/lessons/12943

export function solution(num: number) {
    if (num === 1) return 0;
    for (let i = 0; i <= 500; i++) {
        if (num === 1) return i;
        if (num % 2 === 0) num /= 2;
        else num = num * 3 + 1;
    }
    return -1;
}
