// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/typescript

export class Kata {
  static highAndLow(numbers: string): string {
    const strToNum = numbers.split(' ').map(Number);
    return `${Math.max(...strToNum)} ${Math.min(...strToNum)}`;
  }
}

console.log(Kata.highAndLow('1 2 3 4 5'));
