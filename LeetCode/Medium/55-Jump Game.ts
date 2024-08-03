// https://leetcode.com/problems/jump-game/description/

// 그리디 - 전방 탐색
export function canJump(nums: number[]): boolean {
  let maxJump = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > maxJump) {
      return false;
    }

    maxJump = Math.max(maxJump, i + nums[i]);

    if (maxJump >= nums.length - 1) {
      return true;
    }
  }

  return false;
}

// 후방 탐색
// export function canJump(nums: number[]): boolean {
//   let lastIndex = nums.length - 1;

//   for (let i = lastIndex; i >= 0; i--) {
//     if (i + nums[i] >= lastIndex) {
//       lastIndex = i;
//     }
//   }

//   return lastIndex === 0;
// }
