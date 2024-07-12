// https://leetcode.com/problems/reverse-string/description/

export function reverseString(s: string[]): void {
  let j = s.length - 1;
  for (let i = 0; i < j; i++) {
    const temp = s[i];
    s[i] = s[j];
    s[j] = temp;
    j--;
  }
}

// 02. 간단한 방법
// export function reverseString(s: string[]): void {
//   s.reverse();
// }

// 01. 통과는 하지만 임시 배열을 사용함
// export function reverseString(s: string[]): void {
//   const temp: string[] = [];
//   while (s.length > 0) {
//     temp.push(s.pop()!);
//   }
//   for (const char of temp) {
//     s.push(char);
//   }
//   console.log(s);
// }

reverseString(['h', 'e', 'l', 'l', 'o']);
