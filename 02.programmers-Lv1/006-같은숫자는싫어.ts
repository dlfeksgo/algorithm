//https://school.programmers.co.kr/learn/courses/30/lessons/12906

export function solution(arr: number[]) {
    const answer = [];
    for (const [i, v] of arr.entries()) {
        answer.push(v);
        if (v === arr[i - 1]) answer.pop();
    }
    return answer;
}
