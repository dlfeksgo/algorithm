//https://school.programmers.co.kr/learn/courses/30/lessons/12940

//gcd(a, b) = gcd(b, a % b)
const gcd = (a: number, b: number): number | void => {
    if (b === 0) return a;
    return gcd(b, a % b);
};

//gcd * lcm = a * b
const lcm = (a: number, b: number) => (a * b) / gcd(a, b)!;

export function solution(n: number, m: number) {
    return [gcd(n, m), lcm(n, m)];
}
