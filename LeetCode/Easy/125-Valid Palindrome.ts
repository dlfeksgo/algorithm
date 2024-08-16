// https://leetcode.com/problems/valid-palindrome/description

// two pointer
const isAlphanumeric = (char: string): boolean => {
  const code = char.charCodeAt(0);
  return (
    (code >= 97 && code <= 122) || // a-z
    (code >= 65 && code <= 90) || // A-Z
    (code >= 48 && code <= 57) // 0-9
  );
};

export function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphanumeric(s[left])) {
      left++;
    }
    while (left < right && !isAlphanumeric(s[right])) {
      right--;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

// 내 풀이
// const isAlphabet = (val: string) => {
//   const num = val.charCodeAt(0);
//   const isChar = 97 <= num && num <= 122;
//   const isNum = 48 <= num && num <= 57;
//   return isChar || isNum;
// };

// export function isPalindrome(s: string): boolean {
//   const lowerStr = s.toLowerCase().split('').filter(isAlphabet);
//   return lowerStr.join('') === [...lowerStr].reverse().join('');
// }
