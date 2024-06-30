// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

function solution(str: string, ending: string) {
  return str.endsWith(ending);
}

console.log(solution('abc', 'bc')); // returns true
console.log(solution('abc', 'd')); // returns false
