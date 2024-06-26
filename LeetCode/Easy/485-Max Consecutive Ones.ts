//https://leetcode.com/problems/max-consecutive-ones/description/

export function findMaxConsecutiveOnes(nums: number[]): number {
  let count = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (const num of nums) {
    count += num;
    if (!num) count = 0;
    max = Math.max(count, max);
  }
  return max;
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));

// 01.
// export function findMaxConsecutiveOnes(nums: number[]): number {
//   let sumArr: number[] = [];
//   let index = 0;
//   let count = 0;

//   for (const num of nums) {
//     if (num === 1) count++;
//     else {
//       sumArr.push(count);
//       count = 0;
//       index++;
//     }
//     sumArr[index] = count;
//   }
//   return Math.max(...sumArr);
// }
