//https://school.programmers.co.kr/learn/courses/30/lessons/12906

export function solution(arr: number[]) {
    const answer = [];
    for (const [i, v] of arr.entries()) {
        if (v !== arr[i - 1] ?? v) answer.push(v);
    }
    return answer;
}
