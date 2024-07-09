// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/typescript

const format = (n: number) => String(Math.floor(n)).padStart(2, '0');

export function humanReadable(seconds: number): string {
  const h = seconds / 3600;
  const m = (seconds % 3600) / 60;
  const s = (seconds % 3600) % 60;

  return [h, m, s].map(format).join(':');
}

// 내 풀이
// const zero_pad = (num: number) => {
//   if (num < 10) {
//     return `0${num}`;
//   }
//   return num;
// };

// export function humanReadable(seconds: number): string {
//   const hour = Math.floor(seconds / 3600);

//   const min = Math.floor((seconds % 3600) / 60);
//   const sec = Math.floor((seconds % 3600) % 60);

//   return `${zero_pad(hour)}:${zero_pad(min)}:${zero_pad(sec)}`;
// }

console.log(humanReadable(289323));
