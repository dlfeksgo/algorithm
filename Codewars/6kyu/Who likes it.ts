// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/typescript

export const likes = (a: string[]): string => {
  switch (a.length) {
    case 0:
      return 'no one likes this';
    case 1:
      return `${a[0]} likes this`;
    case 2:
      return `${a[0]} and ${a[1]} like this`;
    case 3:
      return `${a[0]}, ${a[1]} and ${a[3]} like this`;
    default:
      return `${a[0]}, ${a[1]} and ${a.length - 2} others like this`;
  }
};

//${a.splice(2, a.length - 2).length} -> a.length - 2
