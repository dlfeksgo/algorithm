// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/typescript

// split은 해당 문자 첫 번째 등장 이전, 각 등장 사이의 부분, 마지막 등장 이후의 부분으로 자른다
// 자른 배열의 길이는 항상 원래 length보다 +1
export function duplicateCount(text: string): number {
  const lowerText = text.toLowerCase();
  return [...new Set(lowerText)].filter((s) => lowerText.split(s).length - 1 > 1).length;
}

duplicateCount('hello');

// export function duplicateCount(text: string): number {
//   let count = 0;
//   const lowerText = text.toLowerCase();
//   const map: Map<string, number> = new Map();

//   for (const str of [...lowerText]) {
//     const val = map.get(str) ?? 0;
//     map.set(str, val + 1);
//   }

//   [...map].forEach(([, val]) => {
//     if (val >= 2) {
//       count++;
//     }
//   });

//   return count;
// }
