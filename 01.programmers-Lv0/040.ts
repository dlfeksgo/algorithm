//https://school.programmers.co.kr/learn/courses/30/lessons/181913

export function solution(my_string: string, queries: number[][]) {
    for (const [s, e] of queries) {
        const reverseStr = my_string
            .slice(s, e + 1)
            .split('')
            .reverse()
            .join('');
        const left = my_string.slice(0, s);
        const right = my_string.slice(e + 1);
        my_string = left + reverseStr + right;
    }
    return my_string;
}
