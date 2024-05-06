//https://leetcode.com/problems/container-with-most-water/description/

export function maxArea(height: number[]): number {
  let leftIdx = 0;
  let rightIdx = height.length - 1;
  let maxWater = Number.MIN_SAFE_INTEGER;

  while (leftIdx < rightIdx) {
    const leftHeight = height[leftIdx];
    const rightHeight = height[rightIdx];

    maxWater = Math.max(maxWater, Math.abs(leftIdx - rightIdx) * (leftHeight < rightHeight ? leftHeight : rightHeight));

    if (leftHeight < rightHeight) leftIdx++;
    else rightIdx--;
  }

  return maxWater;
}
