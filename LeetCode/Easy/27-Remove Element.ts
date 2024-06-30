// https://leetcode.com/problems/remove-element/

export function removeElement(nums: number[], val: number): number {
  let k = 0;
  for (const num of nums) {
    if (num !== val) {
      nums[k] = num;
      k++;
    }
  }
  return k;
}

// 내 풀이
// 2개의 반복문을 합쳐서 한번에 실행하도록 개선
// export function removeElement(nums: number[], val: number): number {
//   const tempArr: number[] = [];
//   for (const num of nums) {
//     if (num !== val) tempArr.push(num);
//   }
//   for (const [i, v] of tempArr.entries()) {
//     nums[i] = v;
//   }
//   nums.length = tempArr.length;
//   return tempArr.length;
// }

console.log(removeElement([3, 2, 2, 3], 3));
