//https://school.programmers.co.kr/learn/courses/30/lessons/181918

export function solution(arr: number[]) {
    const stk: number[] = [];
    let i = 0;
    while (i < arr.length) {
        if (stk.length === 0 || stk.at(-1)! < arr[i]) {
            stk.push(arr[i]);
            i++;
        } else {
            stk.pop();
        }
    }
    return stk;
}

console.log(solution([1, 4, 2, 5, 3]));
