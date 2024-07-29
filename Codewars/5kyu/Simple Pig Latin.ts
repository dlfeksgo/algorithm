// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/typescript

export const pigIt = (a: string): string => {
  return a
    .split(' ')
    .map((word) => {
      if (!word || word.charCodeAt(0) < 65) return word;
      return word.slice(1) + word[0] + 'ay';
    })
    .join(' ');
};
