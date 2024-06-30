// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/typescript

export const findOdd = (xs: number[]): number => xs.reduce((a, b) => a ^ b, 0);

// 내 풀이
// export const findOdd = (xs: number[]): number => {
//   if (xs.length === 1) return xs[0];

//   const cntMap: Map<number, number> = new Map();
//   for (const x of xs) {
//     const cnt = cntMap.get(x) ?? 0;
//     cntMap.set(x, cnt + 1);
//   }

//   for (const [x, cnt] of [...cntMap]) {
//     if (cnt % 2 !== 0) return x;
//   }

//   return 0;
// };

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
