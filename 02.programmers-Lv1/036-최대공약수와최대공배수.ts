//https://school.programmers.co.kr/learn/courses/30/lessons/12940

const getGCD = (num1: number, num2: number) => {
    let gcd = 1;

    for (let i = 2; i <= Math.min(num1, num2); i++) {
        if (num1 % i === 0 && num2 % i === 0) gcd = i;
    }
    return gcd;
};

const getLCM = (num1: number, num2: number) => {
    let lcm = 1;
    while (true) {
        if (lcm % num1 === 0 && lcm % num2 === 0) break;
        lcm++;
    }
    return lcm;
};

export function solution(n: number, m: number) {
    return [getGCD(n, m), getLCM(n, m)];
}
