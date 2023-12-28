//https://school.programmers.co.kr/learn/courses/30/lessons/181904

export function solution(my_string: string, m: number, c: number) {
    const answer: string[] = [];
    const strArr = Array.from(my_string);
    while (strArr.length > 0) {
        answer.push(strArr.splice(0, m)[c - 1]);
    }
    return answer.join('');
}
