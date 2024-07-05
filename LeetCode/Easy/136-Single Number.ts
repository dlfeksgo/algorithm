// https://leetcode.com/problems/single-number/description/

export function singleNumber(nums: number[]) {
  const map: Map<number, number> = new Map();
  for (const num of nums) {
    const value = map.get(num) ?? 0;
    map.set(num, value + 1);
  }

  for (const [num, count] of map.entries()) {
    if (count === 1) return num;
  }
}

console.log(singleNumber([2, 2, 1]));
