//https://school.programmers.co.kr/learn/courses/30/lessons/181897

export function solution(n: number, slicer: number[], num_list: number[]): number[] {
    const [a, b, c] = [...slicer];
    switch (n) {
        case 1:
            return num_list.slice(0, b + 1);
        case 2:
            return num_list.slice(a);
        case 3:
            return num_list.slice(a, b + 1);
        default:
            return num_list.slice(a, b + 1).filter((_, idx) => !(idx % c));
    }
}
