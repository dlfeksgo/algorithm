// https://leetcode.com/problems/intersection-of-two-arrays-ii/

export function intersect(nums1: number[], nums2: number[]): number[] {
  const intersectionMap: Record<number, number> = {};

  nums1.forEach((num) => {
    intersectionMap[num] = intersectionMap[num] ? intersectionMap[num] + 1 : 1;
  });

  return nums2.filter((num) => {
    if (intersectionMap[num]) {
      intersectionMap[num]--;
      return true;
    }
    return false;
  });
}

// 내 풀이
// export function intersect(nums1: number[], nums2: number[]): number[] {
//   const intersectionMap: Map<number, number> = new Map();

//   nums1.forEach((num) => {
//     const value = intersectionMap.get(num) ?? 0;
//     intersectionMap.set(num, value + 1);
//   });

//   return nums2.filter((num) => {
//     const value = intersectionMap.get(num);
//     if (value) {
//       intersectionMap.set(num, value - 1);
//       return true;
//     }
//     return false;
//   });
// }

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([1, 2, 2, 1], [2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
