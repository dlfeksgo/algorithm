// https://leetcode.com/problems/move-zeroes/description/

export function moveZeroes(nums: number[]): void {
  const zero: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zero.push(...nums.splice(i, 1));
      i--;
    }
  }
  nums.push(...zero);
}

moveZeroes([0, 0, 1]);
