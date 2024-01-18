//https://school.programmers.co.kr/learn/courses/30/lessons/12980

export function solution(n: number) {
    let battery = 0;

    while (n !== 0) {
        if (n % 2 === 0) n /= 2;
        else {
            n--;
            battery++;
        }
    }
    return battery;
}

//문제 요약
// 1. 한 번에 K 칸을 앞으로 점프
// 2. (현재까지 온 거리) x 2 위치로 순간이동
// - 순간이동을 하면 건전지 사용량이 줄지 않지만, 앞으로 K 칸을 점프하면 K 만큼의 건전지 사용량이 듭니다.
// - 이동거리 N
// [반환값]: 점프를 최소화 하는 건전지 사용량 최솟값

//풀이 떠올리기
//1. n이 짝수라면 순간이동만 한다
//2. n이 홀수라면 건전지를 사용하고 거리를 줄인다.
