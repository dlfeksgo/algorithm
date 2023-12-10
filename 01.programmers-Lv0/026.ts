//https://school.programmers.co.kr/learn/courses/30/lessons/181927

export function solution(num_list: number[]) {
    const lastNum = num_list[num_list.length - 1];
    const beforeLastNum = num_list[num_list.length - 2];
    num_list.push(
        lastNum > beforeLastNum ? lastNum - beforeLastNum : lastNum * 2,
    );
    return num_list;
}
