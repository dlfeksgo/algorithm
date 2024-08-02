// https://leetcode.com/problems/majority-element/description/

// Boyor-Moore Majority Vote Algorithm
// 주어진 배열에서 과반수 이상 등장하는 원소를 찾는다.
// 이 알고리즘의 가정은 "과반수 원소가 반드시 존재한다"는 것이다.

export function majorityElement(nums: number[]): number {
  let el = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == el) count++;
    else count--;
    if (count < 0) {
      el = nums[i];
      count = 1;
    }
  }

  return el;
}

// export function majorityElement(nums: number[]): number {
//   let max = Number.MIN_SAFE_INTEGER;
//   let majority: number = Number.MIN_SAFE_INTEGER;
//   const record: Record<string, number> = {};

//   for (const num of nums) {
//     record[num] = (record[num] ?? 0) + 1;
//   }

//   console.log(record);
//   for (const [key, val] of Object.entries(record)) {
//     const originMin = max;
//     max = Math.max(max, val / 2);
//     if (originMin !== max) majority = Number(key);
//   }

//   return majority;
// }

console.log(majorityElement([3, 3, 4]));
