//Two-pointer
export function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];

  // nums.length - 2: 3개 원소 확보
  for (let i = 0; i < nums.length - 2; i++) {
    //i가 0보다 커야 [i-1]이 undfiend가 되지 않는다.
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // 현재 순회중인 i를 기준으로 j와 k를 pointer로 삼는다.
    // j: i 다음 index / k: 마지막 index
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];

      if (sum === 0) {
        result.push([nums[i], nums[j], nums[k]]);

        // 합이 0인 경우에 다음 j값과 이전 k값이 중복되지 않을 때까지 값을 pointer를 변경한다.
        while (j < k && nums[j] === nums[j + 1]) {
          j++;
        }
        while (j < k && nums[k] === nums[k - 1]) {
          k--;
        }

        // while문 통과 시 포인터 이동
        j++;
        k--;
      }
      // 합이 0(target) 보다 작으면 j를 오른쪽으로 이동
      else if (sum < 0) j++;
      // 합이 0(target) 보다 크면 k를 왼쪽으로 이동
      else k--;
    }
  }

  return result;
}
