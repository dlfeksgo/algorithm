// https://www.codewars.com/kata/550f22f4d758534c1100025a/train/typescript

export function dirReduc(arr: string[]): string[] {
  const opposites: { [item: string]: string } = { SOUTH: 'NORTH', NORTH: 'SOUTH', WEST: 'EAST', EAST: 'WEST' };
  let stack = [];
  for (let dir of arr) {
    stack[stack.length - 1] === opposites[dir] ? stack.pop() : stack.push(dir);
  }
  return stack;
}

// 내 풀이
// export function dirReduc(arr: string[]): string[] {
//   if (arr.length <= 1) return arr;

//   const dir: Record<string, string> = {
//     NORTH: 'SOUTH',
//     SOUTH: 'NORTH',
//     WEST: 'EAST',
//     EAST: 'WEST',
//   };

//   for (let i = 0; i < arr.length; i++) {
//     if (dir[arr[i]] === arr[i + 1]) {
//       arr.splice(i, 2);
//       i = -1;
//     }
//   }

//   return arr;
// }

console.log(dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']));
