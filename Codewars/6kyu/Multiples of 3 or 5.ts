// https://www.codewars.com/kata/514b92a657cdc65150000006/train/typescript

export class Challenge {
  static solution(number: number) {
    let sum = 0;
    for (let i = 0; i < number; i++) {
      sum += i % 3 == 0 || i % 5 == 0 ? i : 0;
    }
    return sum;
  }
}

// 첫 풀이 - 답에 풀이를 맞추는 케이스
// export class Challenge {
//   static solution(number: number) {
//     if (number < 3) return 0;

//     let sum = 0;
//     const numbers: number[] = Array(number - 1)
//       .fill(1)
//       .map((v, idx) => v + idx);

//     numbers.forEach((v) => {
//       if (v % 3 === 0 || v % 5 === 0) {
//         console.log(v);
//         sum += v;
//       }
//     });
//     return sum;
//   }
// }

console.log(Challenge.solution(10));
