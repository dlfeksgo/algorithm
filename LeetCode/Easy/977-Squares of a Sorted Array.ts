// https://leetcode.com/problems/squares-of-a-sorted-array/description/

export function sortedSquares(nums: number[]): number[] {
  return nums.map((num) => num ** 2).sort((a, b) => a - b);
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));
