function solution(str: string, ending: string) {
  return str.endsWith(ending);
}

console.log(solution('abc', 'bc')); // returns true
console.log(solution('abc', 'd')); // returns false
