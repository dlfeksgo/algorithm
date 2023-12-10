//https://school.programmers.co.kr/learn/courses/30/lessons/181920

export function solution(start_num: number, end_num: number) {
    const answer: number[] = [];
    for (let i = start_num; i <= end_num; i++) {
        answer.push(i);
    }
    return answer;
}
