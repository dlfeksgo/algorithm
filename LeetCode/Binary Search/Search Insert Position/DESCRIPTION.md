## 문제 링크

[LeetCode/Easy/Search Insert Position](https://leetcode.com/problems/search-insert-position)

## 성능

- Runtime: 56ms
- Memory: 51.54mb

## 복잡도

- 시간복잡도: O(logN)
- 공간복잡도: O(logN)

## 풀이 방향

- Algorithm: Binary Search
- 배열의 중간값 확인
- 처음과 끝 index를 이용해 target값과 비교하며 범위를 좁혀 나간다.

## 회고

- binarySearch template 함수를 수정하여 재사용했으나 해당 문제는 반복문이 더 간단했다.
- template 함수는 comparator의 계산이 복잡해질 때 유용할 것 같다.

## 공간복잡도 O(1) 풀이

- 반복문을 이용해서 이분탐색을 구현한다.
- Runtime: 50ms
- Memory: 51.60mb

```typescript
function searchInsert(nums: number[], target: number): number {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return low;
}
```
