// https://leetcode.com/problems/reverse-integer/description/

export function reverse(x: number): number {
  const min = -Math.pow(2, 31);
  const max = Math.pow(2, 31) - 1;

  const reverseNum = Number([...String(Math.abs(x))].reverse().join(''));

  if (x < 0 && -reverseNum >= min) {
    return -reverseNum;
  } else if (x > 0 && reverseNum <= max) {
    return reverseNum;
  }
  return 0;
}

reverse(-321);
