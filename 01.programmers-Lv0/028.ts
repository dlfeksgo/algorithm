//https://school.programmers.co.kr/learn/courses/30/lessons/181925

export function solution(numLog: number[]) {
    let answer = '';
    for (const [i, v] of numLog.entries()) {
        const differ: number | string =
            i === numLog.length - 1 ? '' : numLog[i + 1] - v;
        switch (differ) {
            case 1:
                answer += 'w';
                break;
            case -1:
                answer += 's';
                break;
            case 10:
                answer += 'd';
                break;
            case -10:
                answer += 'a';
                break;
            default:
                break;
        }
    }
    return answer;
}
