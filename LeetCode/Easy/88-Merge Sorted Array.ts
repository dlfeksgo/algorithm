// https://leetcode.com/problems/merge-sorted-array/description/

export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  nums1.splice(m, nums1.length - m, ...nums2.splice(0, n));
  nums1.sort((a, b) => a - b);
}

// 내 풀이
// export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
// nums1.splice(m);
// nums2.splice(n);
// nums1.push(...nums2);
// nums1.sort((a, b) => a - b);
// }

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
merge([1], 1, [], 0);
merge([0], 0, [1], 1);
