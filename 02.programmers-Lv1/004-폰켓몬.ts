//https://school.programmers.co.kr/learn/courses/30/lessons/1845

export function solution(nums: number[]) {
    const pickNum = nums.length / 2;
    const set = new Set(nums);
    if (pickNum >= set.size) return set.size;
    else return pickNum;
}
