// https://www.codewars.com/kata/5264d2b162488dc400000001/train/typescript

export function spinWords(words: string): string {
  const splitedWords = words.split(' ');
  return splitedWords.map((word) => (word.length >= 5 ? word.split('').reverse().join('') : word)).join(' ');
}

console.log(spinWords('Raw regnaD is best PS2 game'));
