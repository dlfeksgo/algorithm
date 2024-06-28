// https://leetcode.com/problems/duplicate-zeros/description/

export function duplicateZeros(arr: number[]): void {
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    if (arr[i] === 0) {
      arr.splice(i + 1, 0, 0);
      i++;
    }
  }
  arr.length = length;
  //arr.splice(length, arr.length - length);
}

console.log(duplicateZeros([0, 1, 7, 6, 0, 2, 0, 7]));
