//https://school.programmers.co.kr/learn/courses/30/lessons/181908

export function solution(my_string: string, is_suffix: string) {
    const filterStr = Array.from(my_string)
        .map((v, i) => my_string.slice(i))
        .filter((v) => v === is_suffix);
    return filterStr.length ? 1 : 0;
}
