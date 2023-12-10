//https://school.programmers.co.kr/learn/courses/30/lessons/181921

export function solution(l: number, r: number) {
    const answer: number[] = [];
    for (let i = l; i <= r; i++) {
        const flag =
            String(i)
                .split('')
                .filter((v) => v !== '5' && v !== '0').length >= 1;
        if (!flag) answer.push(i);
    }
    if (answer.length === 0) answer.push(-1);
    return answer;
}
