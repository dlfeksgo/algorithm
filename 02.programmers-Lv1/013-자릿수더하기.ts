//https://school.programmers.co.kr/learn/courses/30/lessons/12931

export function solution(n: number) {
    let sum = 0;
    for (const v of String(n)) {
        sum += Number(v);
    }
    return sum;
}

//n을 string으로 변환 후 순회하면서 sum 값 누적
