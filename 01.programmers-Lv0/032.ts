//https://school.programmers.co.kr/learn/courses/30/lessons/181921

export function solution(l: number, r: number) {
    const answer: number[] = [];
    for (let i = l; i <= r; i++) {
        const delCount = String(i)
            .split('')
            .filter((v) => v !== '5' && v !== '0').length;
        delCount === 0 && answer.push(i);
    }
    answer.length === 0 && answer.push(-1);
    return answer;
}

console.log(solution(5, 555));
