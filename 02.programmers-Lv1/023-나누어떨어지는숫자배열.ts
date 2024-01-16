//https://school.programmers.co.kr/learn/courses/30/lessons/12910

export function solution(arr: number[], divisor: number) {
    const filteredArr = arr
        .filter((v) => v % divisor === 0)
        .sort((a, b) => a - b);
    return filteredArr.length ? filteredArr : [-1];
}
