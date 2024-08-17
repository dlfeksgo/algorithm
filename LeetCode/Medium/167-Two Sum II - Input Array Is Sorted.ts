// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description

/**
 * Point 1: 이미 정렬되어 있다
 * Point 2: 정확히 하나의 해만 존재하며, 중복된 요소를 사용할 수 없다.
 */

/**
 * 시간복잡도
 * 이중반복문 풀이: O(n^2)
 * 투 포인터 풀이: O(n)
 */

export function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      break;
    }
    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [left + 1, right + 1];
}

// 이중반복문
// export function twoSum(numbers: number[], target: number): number[] {
//   const length = numbers.length;

//   for (let i = 0; i < length - 1; i++) {
//     for (let j = i + 1; j < length; j++) {
//       if (numbers[i] + numbers[j] === target) {
//         return [i + 1, j + 1];
//       }
//     }
//   }
//   return [];
// }
