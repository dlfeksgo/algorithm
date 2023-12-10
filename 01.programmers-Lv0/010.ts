//https://school.programmers.co.kr/learn/courses/30/lessons/181943

export function solution(
    my_string: string,
    overwrite_string: string,
    s: number,
): string {
    let str = [];
    str = my_string.split('');
    str.splice(s, overwrite_string.length, overwrite_string);

    return str.join('');
}
