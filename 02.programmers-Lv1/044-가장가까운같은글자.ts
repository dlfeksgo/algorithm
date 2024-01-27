//https://school.programmers.co.kr/learn/courses/30/lessons/142086

export function solution(s: string) {
    const answer: number[] = [];
    for (let i = 0; i < s.length; i++) {
        const charIdx = s.slice(0, i).lastIndexOf(s[i], i);
        answer.push(charIdx > -1 ? i - charIdx : -1);
    }
    return answer;
}
