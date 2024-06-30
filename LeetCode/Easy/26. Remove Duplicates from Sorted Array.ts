// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

export function removeDuplicates(nums: number[]): number {
  const numSet = new Set(nums);
  let i = 0;
  for (const v of numSet.values()) {
    nums[i] = v;
    i++;
  }
  return numSet.size;
}
