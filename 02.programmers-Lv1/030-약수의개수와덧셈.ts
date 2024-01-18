//https://school.programmers.co.kr/learn/courses/30/lessons/77884

export function solution(left: number, right: number) {
    let sum = 0;
    for (let i = left; i <= right; i++) {
        let count = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) count++;
        }
        sum = count % 2 ? sum - i : sum + i;
    }
    return sum;
}

solution(13, 17);
