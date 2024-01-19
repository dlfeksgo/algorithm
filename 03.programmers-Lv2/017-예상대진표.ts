//https://school.programmers.co.kr/learn/courses/30/lessons/12985

export function solution(n: number, a: number, b: number) {
    let round = 0;
    while (a !== b) {
        a = Math.round(a / 2);
        b = Math.round(b / 2);
        round++;
    }
    return round;
}

// 1. 참가자 1부터 N번을 차례대로 배정받습니다.
// 2. 1번↔2번, 3번↔4번, ... , N-1번↔N번의 참가자끼리 게임을 진행합니다.
// 3. 각 게임에서 이긴 사람은 다음 라운드에 진출할 수 있습니다.
// 4. 다음 라운드에 진출할 참가자의 번호는 다시 1번부터 N/2번을 차례대로 배정받습니다.
// 5. 게임은 최종 한 명이 남을 때까지 진행됩니다.

// 처음 라운드에서 A번을 가진 참가자는 경쟁자로 생각하는 B번 참가자와 몇 번째 라운드에서 만나는지 궁금해졌습니다.
// - 게임 참가자 수 N
// - 참가자 번호 A
// - 경쟁자 번호 B
