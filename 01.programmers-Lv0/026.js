//https://school.programmers.co.kr/learn/courses/30/lessons/181927

function solution(num_list) {
  const answer = num_list;
  const lastNum = num_list[num_list.length - 1];
  const beforeLastNum = num_list[num_list.length - 2];
  answer.push(lastNum > beforeLastNum ? lastNum - beforeLastNum : lastNum * 2);
  return answer;
}
