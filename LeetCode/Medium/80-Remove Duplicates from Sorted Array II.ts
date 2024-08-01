// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/

// i,j pointer 이용하기
// 길이만 반환하므로 j pointer를 이용해서 변경된 길이만 세기
function removeDuplicates(nums: number[]): number {
  let j = 2;

  for (let i = 2; i < nums.length; ++i) {
    if (nums[i] !== nums[j - 2]) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
}

console.log(removeDuplicates([1, 1, 1, 1]));
console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));

// export function removeDuplicates(nums: number[]): number {
//   let cnt = 1;
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] === nums[i - 1]) {
//       cnt++;
//       if (cnt > 2) {
//         nums.splice(i, 1);
//         i--;
//       }
//     } else {
//       cnt = 1;
//     }
//   }
//   return nums.length;
// }
