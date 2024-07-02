// https://leetcode.com/problems/rotate-array/description/

// O(n)
// 현재 위치의 값이 k만큼 이동을 했을때 음수를 고려하여 반복
export function rotate(nums: number[], k: number): void {
  const copyArr = [...nums];

  for (const curIdx of nums.keys()) {
    const newIdx = (curIdx + k) % nums.length;
    nums[newIdx] = copyArr[curIdx];
  }
}

// 내 풀이 - O(k)
// export function rotate(nums: number[], k: number): void {
//   for (let i = 0; i < k; i++) {
//     const lastVal = nums.pop()!;
//     nums.unshift(lastVal);
//   }
// }

rotate([1, 2, 3], 2);

// 312
// 231
