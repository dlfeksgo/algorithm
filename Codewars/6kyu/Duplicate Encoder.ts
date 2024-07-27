// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/typescript

export function duplicateEncode(word: string) {
  const splitArr = word.toLowerCase().split('');
  const map: Map<string, number> = new Map();
  for (const char of splitArr) {
    map.set(char, (map.get(char) ?? 0) + 1);
  }

  return splitArr.map((char) => ((map.get(char) ?? 0) > 1 ? ')' : '(')).join('');
}

console.log(duplicateEncode('(( @'));

// 01
//   .map((a, i, w) => {
//     return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'

// 02
// const dict = {};

// for (let ch of word) {
//   if (dict[ch.toLowerCase()]) {
//     dict[ch.toLowerCase()] = ')';
//   } else {
//     dict[ch.toLowerCase()] = '(';
//   }
// }
