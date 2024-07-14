// https://leetcode.com/problems/first-unique-character-in-a-string/description/

// O(n) - O(n)
export function firstUniqChar(s: string): number {
  const map: Map<string, number> = new Map();
  for (const char of s) {
    const value = map.get(char) ?? 0;
    map.set(char, value + 1);
  }

  const idx = [...s].findIndex((char) => map.get(char) === 1);

  return idx >= 0 ? idx : -1;
}

// O(n2)
// function firstUniqChar(sentence: string): number {
//   for (let i = 0; i < sentence.length; i++) {
//     if (sentence.indexOf(sentence[i]) === sentence.lastIndexOf(sentence[i])) return i;
//   }

//   return -1;
// }

console.log(firstUniqChar('dddccdbba'));
