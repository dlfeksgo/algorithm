//https://school.programmers.co.kr/learn/courses/30/lessons/181905

export function solution(my_string: string, s: number, e: number) {
    const snippets = my_string.substring(s, e + 1);
    const reverseStr = my_string
        .substring(s, e + 1)
        .split('')
        .reverse()
        .join('');
    return my_string.replace(snippets, reverseStr);
}
