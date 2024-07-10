// https://www.codewars.com/kata/541c8630095125aba6000c00/train/typescript

export const digitalRoot = (n: number): number => {
  while (n >= 10) {
    n = String(n)
      .split('')
      .reduce((a, b) => Number(a) + Number(b), 0);
  }

  return n;
};

// export const digitalRoot = (n: number): number => {
//   let str = String(n);
//   while (str.length > 1) {
//     const sum = str.split('').reduce((a, b) => Number(a) + Number(b), 0);
//     str = String(sum);
//   }

//   return Number(str);
// };

console.log(digitalRoot(942));
