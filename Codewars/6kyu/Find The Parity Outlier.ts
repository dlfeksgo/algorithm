// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/typescript

export function findOutlier(integers: number[]): number {
  if (integers.filter((int) => int % 2 === 0).length > 1) {
    return integers.find((int) => int % 2 !== 0) ?? 0;
  } else {
    return integers.find((int) => int % 2 === 0) ?? 0;
  }
}

// export function findOutlier(integers: number[]): number {
//   const odd: number[] = [];
//   const even: number[] = [];
//   for (const int of integers) {
//     if (int % 2 === 0) {
//       even.push(int);
//     } else {
//       odd.push(int);
//     }
//   }

//   return odd.length === 1 ? odd[0] : even[0];
// }
