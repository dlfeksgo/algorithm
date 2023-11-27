//https://school.programmers.co.kr/learn/courses/30/lessons/181919

function solution(n) {
  const answer = [n];
  let copy = n;

  for (let i = 0; i < n; i++) {
    copy % 2 === 0 ? (copy /= 2) : (copy = 3 * copy + 1);
    answer.push(copy);
    if (copy === 1) {
      return answer;
    }
  }
}
