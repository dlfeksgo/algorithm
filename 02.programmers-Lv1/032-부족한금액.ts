//https://school.programmers.co.kr/learn/courses/30/lessons/82612

export function solution(price: number, money: number, count: number) {
    let cost = 0;
    for (let i = 1; i <= count; i++) {
        cost += price * i;
    }
    return cost > money ? cost - money : 0;
}

// 1. 이용료 price
// 2. N번 째 이용 시 N배 지불
// count번 탔을 때 얼마가 모자라는지를 return 하도록 solution 함수 완성
// 단, 금액이 부족하지 않으면 0을 return
