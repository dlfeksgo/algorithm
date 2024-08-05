// https://www.codewars.com/kata/54e6533c92449cc251001667/train/typescript

export function uniqueInOrder(iterable: string | (string | number)[]): (string | number)[] {
  if (!iterable.length) return [];
  const result: (string | number)[] = [iterable[0]];

  for (let i = 1; i < iterable.length; i++) {
    if (iterable[i - 1] !== iterable[i]) {
      result.push(iterable[i]);
    }
  }

  return result;
}

// best practice
// export function uniqueInOrder(iterable: string | (string | number)[]): (string | number)[] {
//   return [...iterable].filter((x, i) => x != iterable[i - 1]);
// }
