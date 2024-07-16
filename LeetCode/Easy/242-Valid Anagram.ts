// https://leetcode.com/problems/valid-anagram/description/

export const isAnagram = (s: string, t: string): boolean => {
  if (t.length !== s.length) return false;

  const map: Map<string, number> = new Map();
  for (const char of s) {
    const val = map.get(char) ?? 0;
    map.set(char, val + 1);
  }
  for (const char of t) {
    const val = map.get(char) ?? 0;
    map.set(char, val - 1);
  }

  return [...map].filter(([, v]) => v !== 0).length === 0;
};

// 시간복잡도 O(n^2)
// const isAnagram = (s: string, t: string): boolean => {
//   if (t.length !== s.length) return false;

//   t.split('').forEach((char) => (s = s.replace(char, '')));
//   return !s.length;
// };
