//https://school.programmers.co.kr/learn/courses/30/lessons/181921

export function solution(l: number, r: number) {
    const answer: number[] = [];
    for (let i = l; i <= r; i++) {
        const delCount = String(i)
            .split('')
            .filter((v) => v !== '5' && v !== '0').length;
        if (!delCount) answer.push(i);
    }
    return answer.length === 0 ? [-1] : answer;
}
