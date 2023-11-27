//https://school.programmers.co.kr/learn/courses/30/lessons/181923

function solution(arr, queries) {
  const answer = [];
  queries.forEach((query) => {
    const newArr = [];
    for (let i = query[0]; i <= query[1]; i++) {
      if (query[2] < arr[i]) {
        newArr.push(arr[i]);
      }
    }
    answer.push(newArr.length === 0 ? -1 : Math.min(...newArr));
  });
  return answer;
}
