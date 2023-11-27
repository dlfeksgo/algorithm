//https://school.programmers.co.kr/learn/courses/30/lessons/181939

function solution(a, b) {
  let answer = 0;
  const case1 = String(a) + String(b);
  const case2 = String(b) + String(a);

  if (case1 >= case2) {
    answer = case1;
    return Number(answer);
  } else if (case1 < case2) {
    answer = case2;
    return Number(answer);
  }
}
