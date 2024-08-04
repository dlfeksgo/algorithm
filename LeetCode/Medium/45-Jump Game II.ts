// https://leetcode.com/problems/jump-game-ii/description/

export function jump(nums: number[]): number {
  // 미리 첫 점프를 했다고 가정했으나 루프 내에서 조건에 따라 jumps를 관리하는 것이 더 명확함
  // end: 현재 점프에서 도달할 수 있는 범위의 끝, 다음 점프를 결정하는 기준
  let end = 0;
  let jumps = 0;
  let maxReach = 0;

  // 루프 조건 설정 실패
  for (let start = 0; start < nums.length - 1; start++) {
    // 현재 인덱스까지의 탐색을 통해 도달할 수 있는 가장 먼 위치
    maxReach = Math.max(maxReach, start + nums[start]);

    // 현재 출발점이 현재까지의 도달 가능한 도착점과 동일하면 갱신해야 함
    // end와 maxReach가 같아지면 무한루프에 빠질 수 있지만, 문제에서 도착 보장 조건이 주어짐 = end는 항상 커짐
    if (start == end) {
      jumps++;
      end = maxReach;

      if (end >= nums.length - 1) {
        return jumps;
      }
    }
  }

  return jumps;
}

// export function jump(nums: number[]): number {
//   let end = nums[0];
//   let jumps = 1;
//   let maxReached = 0;

//   for (let start = 1; start <= nums.length; start++) {
//     if (end >= nums.length - 1) {
//       return jumps;
//     }

//     maxReached = Math.max(end, start + nums[start]);

//     if (maxReached >= end) {
//       jumps++;
//       return jumps;
//     }
//   }

//   return jumps;
// }
