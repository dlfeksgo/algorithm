//https://school.programmers.co.kr/learn/courses/30/lessons/181906

export function solution(my_string: string, is_prefix: string) {
    return my_string.startsWith(is_prefix) ? 1 : 0;
}
