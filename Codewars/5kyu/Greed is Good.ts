// https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/typescript

const scoreValue: Record<number, number> = {
  1: 100,
  5: 50,
  2: 200,
  3: 300,
  4: 400,
  6: 600,
};

export function score(dice: number[]): number {
  let total = 0;
  const diceMap: Map<number, number> = new Map();
  for (const num of dice) {
    diceMap.set(num, (diceMap.get(num) ?? 0) + 1);
  }

  for (const [v, cnt] of diceMap) {
    if (cnt >= 3) {
      total += scoreValue[v] * (v === 1 || v === 5 ? 10 : 1);
      if (v === 1 || v === 5) {
        total += scoreValue[v] * (cnt - 3);
      }
    } else if (v === 1 || v === 5) {
      total += scoreValue[v] * cnt;
    }
  }

  return total;
}

console.log(score([2, 2, 2, 2, 3]));

// for (const [v, cnt] of [...diceMap]) {
//   if (cnt >= 3) {
//     const diff = cnt - 3;
//     if (v === 1 || v === 5) {
//       total += scoreValue[v] * 10;
//       total += diff > 0 ? scoreValue[v] * diff : 0;
//     } else {
//       total += scoreValue[v];
//     }
//   } else {
//     if (v === 1 || v === 5) {
//       total += scoreValue[v] * cnt;
//     }
//   }
// }
