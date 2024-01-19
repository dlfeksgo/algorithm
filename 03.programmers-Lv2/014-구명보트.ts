//https://school.programmers.co.kr/learn/courses/30/lessons/42885

export function solution(people: number[], limit: number) {
    people.sort((a, b) => a - b);
    let boat = 0;
    let i = 0;
    let j = people.length - 1;
    while (i <= j) {
        if (people[i] + people[j] <= limit) {
            i++;
        }
        boat++;
        j--;
    }
    return boat;
}

//문제 요약
// 1. 한 번에 최대 2명
// 2. 구명보트 최소 갯수

// - 사람 몸무기 배열
// - 구명보트 무게 제한
// - [반환값]: 모든 사람을 구출하기 위한 구명보트 최소 사용 갯수

//풀이 떠올리기
//최대한 2명씩 보트에 태울 수 있도록 한다. -> 1명만 탈 수 있다.
//최대 몸무게인 사람을 태우고 최소 몸무게를 태웠을 때 제한을 통과하면 boat++
//통과하지 못하면 최대 몸무게인 사람만 보내기
