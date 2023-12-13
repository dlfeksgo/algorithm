//https://school.programmers.co.kr/learn/courses/30/lessons/181942

export function solution(str1: string, str2: string) {
    let answer = '';
    const str1Arr = str1.split('');
    const str2Arr = str2.split('');
    for (let i = 0; i < str1.length; i++) {
        answer += str1Arr[i] + str2Arr[i];
    }
    return answer;
}
