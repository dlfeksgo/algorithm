//https://leetcode.com/problems/container-with-most-water/description/

/**
 * 2. 복습 풀이
 * 투 포인터가 무조건 양쪽에서 동시에 움직일 필요 없다는 점 인지하기
 */

export function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    // const [leftH, rightH] = [height[left], height[right]];
    // 메모리를 고려하여 원시값으로 적용
    const leftH = height[left];
    const rightH = height[right];

    // left와 right는 index이므로 Math.abs가 필요하지 않다
    const water = (right - left) * (leftH < rightH ? leftH : rightH);

    maxWater = Math.max(water, maxWater);

    if (leftH < rightH) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}

// 1.
// export function maxArea(height: number[]): number {
//   let leftIdx = 0;
//   let rightIdx = height.length - 1;
//   let maxWater = Number.MIN_SAFE_INTEGER;

//   while (leftIdx < rightIdx) {
//     const leftHeight = height[leftIdx];
//     const rightHeight = height[rightIdx];

//     maxWater = Math.max(maxWater, Math.abs(leftIdx - rightIdx) * (leftHeight < rightHeight ? leftHeight : rightHeight));

//     if (leftHeight < rightHeight) leftIdx++;
//     else rightIdx--;
//   }

//   return maxWater;
// }
