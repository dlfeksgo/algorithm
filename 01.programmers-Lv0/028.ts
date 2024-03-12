//https://school.programmers.co.kr/learn/courses/30/lessons/181925

const cases: Record<string, string> = {
    '1': 'w',
    '-1': 's',
    '10': 'd',
    '-10': 'a',
};

export function solution(numLog: number[]) {
    let answer = '';
    for (let i = 0; i < numLog.length - 1; i++) {
        const differ = numLog[i + 1] - numLog[i];
        answer += cases[differ];
    }
    return answer;
}

console.log(solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]));
