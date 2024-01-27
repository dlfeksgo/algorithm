//https://school.programmers.co.kr/learn/courses/30/lessons/12926

const changeChar = (code: number, n: number) => {
    let startNum = 0;
    if (code >= 65 && code <= 90) startNum = 65;
    if (code >= 97 && code <= 122) startNum = 97;
    return String.fromCharCode(((code + n - startNum) % 26) + startNum);
};

export function solution(s: string, n: number) {
    return [...s]
        .map((char) =>
            char === ' ' ? char : changeChar(char.charCodeAt(0), n),
        )
        .join('');
}
