const binarySearch = (
  sortedList: number[],
  target: number,
  low: number,
  high: number,
  comparator: (value: number, target: number) => number,
): number => {
  if (low > high) return low;

  const mid = Math.floor((low + high) / 2);

  const result = comparator(sortedList[mid], target);

  if (result === 0) {
    return mid;
  } else if (result < 0) {
    return binarySearch(sortedList, target, mid + 1, high, comparator);
  } else {
    return binarySearch(sortedList, target, low, mid - 1, comparator);
  }
};

const comparator = (value: number, target: number) => {
  if (value === target) return 0;
  return value < target ? -1 : 1;
};

export function searchInsert(nums: number[], target: number): number {
  return binarySearch(nums, target, 0, nums.length - 1, comparator);
}
