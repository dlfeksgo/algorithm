//https://school.programmers.co.kr/learn/courses/30/lessons/42583

export function solution(
    bridge_length: number,
    weight: number,
    truck_weights: number[],
) {
    let sec = 0;
    let sum = 0;
    const trucks = [];

    while (truck_weights.length || trucks.length) {
        if (
            weight >= sum + truck_weights[0] &&
            trucks.length <= bridge_length
        ) {
            const t = truck_weights.shift() as number;
            sum += t;
            trucks.push([t, sec + bridge_length]); //여기가 이해안됨
            sec++;
        } else {
            const [truck, passedSec] = trucks.shift() as number[];
            if (sec < passedSec) {
                sec = passedSec;
            }
            sum -= truck;
        }
    }
    return sec + 1;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
