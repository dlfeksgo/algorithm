//https://school.programmers.co.kr/learn/courses/30/lessons/181915

export function solution(my_string: string, index_list: number[]) {
    let answer = '';
    for (const v of index_list) {
        answer += my_string[v];
    }
    return answer;
}
