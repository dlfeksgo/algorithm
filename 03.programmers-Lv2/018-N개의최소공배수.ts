//https://school.programmers.co.kr/learn/courses/30/lessons/12953

const getLCM = (num1: number, num2: number) => {
    let lcm = 1;
    while (true) {
        if (lcm % num1 == 0 && lcm % num2 == 0) {
            break;
        }
        lcm++;
    }
    return lcm;
};

export function solution(arr: number[]) {
    while (arr.length > 1) {
        const a = arr.pop()!;
        const b = arr.pop()!;
        arr.push(getLCM(a, b));
    }
    return arr[0];
}
