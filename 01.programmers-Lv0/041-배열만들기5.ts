//https://school.programmers.co.kr/learn/courses/30/lessons/181912

export function solution(intStrs: string[], k: number, s: number, l: number) {
    const answer: number[] = [];
    for (const str of intStrs) {
        const slicedNum = Number(str.slice(s, s + l));
        if (slicedNum > k) answer.push(slicedNum);
    }
    return answer;
}
