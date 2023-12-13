//https://school.programmers.co.kr/learn/courses/30/lessons/181929

export function solution(num_list: number[]) {
    const answer1 = num_list.reduce((a, b) => a + b);
    const answer2 = num_list.reduce((a, b) => a * b);

    return answer1 ** 2 > answer2 ? 1 : 0;
}
