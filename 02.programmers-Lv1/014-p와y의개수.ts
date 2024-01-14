//https://school.programmers.co.kr/learn/courses/30/lessons/12916

export function solution(s: string) {
    const str = s.toUpperCase();
    return str.split('P').length === str.split('Y').length ? true : false;
}

//s를 모두 대문자로 변환하기
//s를 순회하면서 p개수와 y개수 구하기
//결과가 0이면 true
