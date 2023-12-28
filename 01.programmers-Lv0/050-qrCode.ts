//https://school.programmers.co.kr/learn/courses/30/lessons/181903

export function solution(q: number, r: number, code: string) {
    const answer: string[] = [];
    for (const [i, char] of [...code].entries()) {
        if (i % q === r) answer.push(char);
    }
    return answer.join('');
}
