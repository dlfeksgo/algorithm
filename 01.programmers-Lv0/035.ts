//https://school.programmers.co.kr/learn/courses/30/lessons/181918

export function solution(arr: number[]) {
    const stk: number[] = [];
    let i = 0;
    while (i < arr.length) {
        if (stk[stk.length - 1] >= arr[i]) stk.pop();
        else {
            stk.push(arr[i]);
            i++;
        }
    }
    return stk;
}
