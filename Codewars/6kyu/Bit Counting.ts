// https://www.codewars.com/kata/526571aae218b8ee490006f4/train/typescript

export function countBits(n: number): number {
  return n
    .toString(2)
    .split('')
    .filter((v) => Number(v) === 1).length;
  // Number로 변환하지 않고 string '1'로 체크해도 됨
}

countBits(1234);
