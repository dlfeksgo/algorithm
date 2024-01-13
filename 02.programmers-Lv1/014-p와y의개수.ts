//https://school.programmers.co.kr/learn/courses/30/lessons/12916

type Char = {
    [key: string]: number;
};

export function solution(s: string) {
    const char: Char = {
        P: 0,
        Y: 0,
    };
    for (const v of s.toUpperCase()) {
        if (char[v] !== undefined) char[v] += 1;
    }
    return char.P === char.Y ? true : false;
}

//s를 모두 대문자로 변환하기
//s를 순회하면서 p개수와 y개수 구하기
//결과가 0이면 true
