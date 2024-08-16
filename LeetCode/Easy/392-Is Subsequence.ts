// https://leetcode.com/problems/is-subsequence/description

// 빈 문자열은 어떤 문자열에서도 항상 subsequence가 될 수 있다.
export function isSubsequence(s: string, t: string): boolean {
  if (s.length === 0) {
    return true;
  }

  let i = 0;

  for (const char of t) {
    if (s[i] === char) {
      i++;
    }
    if (i === s.length) {
      return true;
    }
  }

  return false;
}
