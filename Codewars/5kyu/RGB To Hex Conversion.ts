// https://www.codewars.com/kata/513e08acc600c94f01000001/train/typescript

function transferToHex(n: number): string {
  return (n > 255 ? 255 : n < 0 ? 0 : n).toString(16).toUpperCase().padStart(2, '0');
}
export function rgb(r: number, g: number, b: number): string {
  return transferToHex(r) + transferToHex(g) + transferToHex(b);
}

// 내 풀이
// const transferToHex = (num: number) => {
//   if (num < 0) {
//     return '00';
//   }
//   if (num > 255) {
//     return 'FF';
//   }
//   if (0 <= num || num <= 15) {
//     return num.toString(16).padStart(2, '0');
//   }
//   return num.toString(16);
// };

// // 값이 0보다 작으면 00 출력
// // 255를 넘어가면 FF 출력
// // 0~15 사이의 값은 padStary(2,0)
// export function rgb(r: number, g: number, b: number) {
//   const hexR = transferToHex(r).toUpperCase();
//   const hexG = transferToHex(g).toUpperCase();
//   const hexB = transferToHex(b).toUpperCase();

//   return `${hexR}${hexG}${hexB}`;
// }

console.log(rgb(52, 197, 152));
console.log(rgb(0, 0, 0));
console.log(rgb(247, -29, 209));
