//https://school.programmers.co.kr/learn/courses/30/lessons/181919

export function solution(n: number) {
    const answer: number[] = [n];
    let x = n;
    for (let i = 0; x >= 1; i++) {
        if (x === 1) return answer;
        else {
            x % 2 === 0 ? (x /= 2) : (x = 3 * x + 1);
            answer.push(x);
        }
    }
}
