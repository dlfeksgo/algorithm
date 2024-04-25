//https://leetcode.com/problems/contains-duplicate/description/

export function containsDuplicate(nums: number[]): boolean {
    const set = new Set(nums);
    return set.size !== nums.length;
}
