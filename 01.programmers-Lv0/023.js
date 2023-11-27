//https://school.programmers.co.kr/learn/courses/30/lessons/181930

function solution(a, b, c) {
  let sum = "";
  if (a !== b && b !== c && a !== c) {
    return (sum = a + b + c);
  } else if (a === b && b === c) {
    return (sum =
      (a + b + c) *
      (a * a + b * b + c * c) *
      (a * a * a + b * b * b + c * c * c));
  } else {
    return (sum = (a + b + c) * (a * a + b * b + c * c));
  }
}
