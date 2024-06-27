// https://www.codewars.com/kata/525f50e3b73515a6db000b83

export function createPhoneNumber(numbers: number[]) {
  let format = '(xxx) xxx-xxxx';

  for (const i of numbers.keys()) {
    format = format.replace('x', String(numbers[i]));
  }

  return format;
}

// export function createPhoneNumber(numbers: number[]) {
//   const first = numbers.splice(0, 3).join('');
//   const mid = numbers.splice(0, 3).join('');
//   const last = numbers.join('');
//   return `(${first}) ${mid}-${last}`;
// }

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
