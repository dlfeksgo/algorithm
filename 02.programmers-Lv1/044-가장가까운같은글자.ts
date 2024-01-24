//https://school.programmers.co.kr/learn/courses/30/lessons/142086

export function solution(s: string) {
    const answer: number[] = [];
    for (let i = 0; i < s.length; i++) {
        const tempArr: number[] = [];
        for (let j = 0; j <= i - 1; j++) {
            if (s[i] === s[j]) tempArr.push(i - j);
        }
        if (!tempArr.length) answer.push(-1);
        else answer.push(tempArr.pop()!);
    }
    return answer;
}

console.log(solution('foo'));
