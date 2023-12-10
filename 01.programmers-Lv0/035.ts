//https://school.programmers.co.kr/learn/courses/30/lessons/181918

export function solution(arr: number[]) {
    const stk: number[] = [];
    let i = 0;
    while (i < arr.length) {
        if (stk.length === 0) {
            stk.push(arr[i]);
            i++;
        } else if (stk[stk.length - 1] < arr[i]) {
            stk.push(arr[i]);
            i++;
        } else {
            stk.pop();
        }
    }
    return stk;
}

const result = solution([1, 4, 2, 5, 3]);
console.log(result);
