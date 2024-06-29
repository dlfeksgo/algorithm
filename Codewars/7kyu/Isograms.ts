// Best Practice
export function isIsogram(str: string) {
  return new Set(str.toUpperCase()).size === str.length;
}

// 내 시도
// export function isIsogram(str: string) {
//   const upperStr = str.toUpperCase();
//   return ![...upperStr].some((v, idx) => upperStr.slice(idx + 1).includes(v));
// }

console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('aba'));
console.log(isIsogram('moOse'));
