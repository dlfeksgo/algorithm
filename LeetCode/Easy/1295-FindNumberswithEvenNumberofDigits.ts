export function findNumbers(nums: number[]) {
  let cnt = 0;
  for (const num of nums) {
    const digits = [...String(num)].length;
    if (digits % 2 !== 0) continue;
    cnt++;
  }
  return cnt;
}
