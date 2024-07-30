// https://www.codewars.com/kata/55c6126177c9441a570000cc

export function orderWeight(s: string): string {
  const weight = (a: string): number => a.split('').reduce((sum, digit) => sum + +digit, 0);

  const compare = (a: string, b: string): number => {
    let weightDiff = weight(a) - weight(b);
    return weightDiff ? weightDiff : a > b ? 1 : -1;
  };

  return s.split(' ').sort(compare).join(' ');
}

console.log(orderWeight('56 65 74 100 99 68 86 180 90'));

// Map 풀이를 객체 배열로 변경
// export function orderWeight(strng: string): string {
//   const weights: { value: string; sum: number }[] = [];

//   for (const value of strng.split(' ')) {
//     const sum = value.split('').reduce((a, b) => a + Number(b), 0);
//     weights.push({ value, sum });
//   }

//   weights.sort((a, b) => {
//     if (a.sum === b.sum) {
//       return a.value.localeCompare(b.value);
//     }
//     return a.sum - b.sum;
//   });

//   return weights.map(({ value }) => value).join(' ');
// }

// Map 또는 객체 접근 시 동일한 값 처리가 어려움
// export function orderWeight(strng: string): string {
//   const map: Map<string, number> = new Map();

//   for (const v of strng.split(' ')) {
//     const sum = v.split('').reduce((a, b) => Number(a) + Number(b), 0);
//     map.set(v, sum);
//   }

//   const sortedMap = [...map].sort(([, v1], [, v2]) => v1 - v2);
//   return sortedMap.map(([key]) => key).join(' ');
// }
